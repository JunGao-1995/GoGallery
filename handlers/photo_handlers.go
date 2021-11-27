package handlers

import (
	"GoGallery/model"
	"fmt"
	"github.com/gin-gonic/gin"
	"log"
	"net/http"
	"path"
)

func GetAlbumList(c *gin.Context) {
	user, ok := c.Get("user")
	if ok {
		user, _ := user.(*model.User)
		albums := user.GetAlbumListByUser()
		c.JSON(http.StatusOK, gin.H{
			"data": albums,
		})
		return
	}
	c.JSON(http.StatusInternalServerError, nil)
	return
}

func AddAlbum(c *gin.Context) {
	user, ok := c.Get("user")
	if ok {
		user, _ := user.(*model.User)
		newAlbum := &model.Album{}
		if err := c.ShouldBind(newAlbum); err != nil {
			log.Printf("Bind new album info failed, %s", err)
			c.JSON(http.StatusInternalServerError, nil)
			return
		}
		if len(newAlbum.Name) < 2 {
			log.Printf("Album name: %s too short", newAlbum.Name)
			c.JSON(http.StatusInternalServerError, nil)
			return
		}
		newAlbum.UserId = user.ID
		if err := newAlbum.CreateAlbum(); err != nil {
			log.Printf("Create new album failed, %s", err)
			c.JSON(http.StatusInternalServerError, nil)
			return
		} else {
			c.JSON(http.StatusOK, gin.H{
				"data": "success",
			})
			return
		}
	} else {
		log.Printf("Auth failed!")
		c.JSON(http.StatusInternalServerError, nil)
		return
	}
}

func GetPhotoList(c *gin.Context) {
	user, ok := c.Get("user")
	if ok {
		user, _ := user.(*model.User)
		queryAlbum := &model.Album{}
		if err := c.ShouldBind(queryAlbum); err != nil || queryAlbum.Name == "" {
			c.JSON(http.StatusInternalServerError, nil)
			return
		}
		album, _ := user.GetAlbumByUser(queryAlbum.Name)
		photos, err := album.GetPhotoInfo()
		if err != nil {
			c.JSON(http.StatusInternalServerError, nil)
			return
		} else {
			log.Printf("Query photo list: %+v\n", photos)
			c.JSON(http.StatusOK, gin.H{
				"data": photos,
			})
			return
		}
	} else {
		log.Printf("Auth failed!")
		c.JSON(http.StatusInternalServerError, nil)
		return
	}
}

func RemoveAlbum(c *gin.Context) {
	user, ok := c.Get("user")
	if ok {
		user, _ := user.(*model.User)
		queryAlbum := &model.Album{}
		if err := c.ShouldBind(queryAlbum); err != nil || queryAlbum.Name == "" {
			c.JSON(http.StatusInternalServerError, nil)
			return
		}
		album, _ := user.GetAlbumByUser(queryAlbum.Name)
		album.RemoveAlbum()
		c.JSON(http.StatusOK, gin.H{
			"data": "success",
		})
		return
	} else {
		c.JSON(http.StatusInternalServerError, nil)
	}
}

func UploadPhoto(c *gin.Context) {
	user, ok := c.Get("user")
	if ok {
		user, _ := user.(*model.User)
		log.Printf("相册名：%s", c.Param("name"))
		album, isExists := user.GetAlbumByUser(c.Param("name"))
		if isExists {
			file, _ := c.FormFile("file")
			storePath := path.Join(album.Path, file.Filename)
			err := c.SaveUploadedFile(file, storePath)
			if err != nil {
				log.Println(err)
				c.JSON(http.StatusInternalServerError, gin.H{"data": "failed"})
				return
			} else {
				photo := &model.Photo{
					AlbumId: album.ID,
					Name:    file.Filename,
					Link:    fmt.Sprintf("http://localhost:8080/photos/%d/%s/%s", int(user.ID), album.Name, file.Filename),
					Path:    storePath,
				}
				album.AddPhoto(photo)
				c.JSON(http.StatusOK, gin.H{
					"data": "success",
				})
				return
			}
		} else {
			log.Println("Album not exists.")
			c.JSON(http.StatusInternalServerError, gin.H{"data": "failed"})
			return
		}
	} else {
		log.Println("Auth failed.")
		c.JSON(http.StatusInternalServerError, gin.H{"data": "failed"})
		return
	}
}
