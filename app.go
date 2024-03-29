package main

import (
	"GoGallery/config"
	"GoGallery/database"
	"GoGallery/handlers"
	"GoGallery/model"
	"fmt"
	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	"net/http"
	"runtime"
	// "github.com/gin-contrib/cors"
)

func AuthMiddleWare() gin.HandlerFunc {
	return func(c *gin.Context) {
		if c.Request.Header["X-Token"] != nil {
			token := c.Request.Header["X-Token"][0]
			if len(token) > 0 {
				c.Set("token", token)
				user, isExists := model.FindUserByToken(token)
				c.Set("isExists", isExists)
				if isExists {
					c.Set("user", user)
				}
			}
		}
		c.Next()
	}
}

func main() {
	config.NewConfig("dev")
	database.NewMysql()
	model.InitUserSqlStruct()
	model.InitAlbumSqlStruct()

	r := gin.Default()
	fmt.Printf("%T %+v\n", config.Conf.AllowOrigins, config.Conf.AllowOrigins)
	r.Use(cors.New(cors.Config{
		AllowOrigins:     config.Conf.AllowOrigins,
		AllowMethods:     []string{http.MethodGet, http.MethodPatch, http.MethodPost, http.MethodHead, http.MethodDelete, http.MethodOptions},
		AllowHeaders:     []string{"Content-Type", "X-XSRF-TOKEN", "Accept", "Origin", "X-Requested-With", "Authorization", "X-Token"},
		ExposeHeaders:    []string{"Content-Length"},
		AllowCredentials: true,
	}))
	r.Use(AuthMiddleWare())

	if sysType := runtime.GOOS; sysType == "linux" {
		r.Static("/photos", config.Conf.AlbumStorePathOnLinux)
	} else if sysType == "windows" {
		r.Static("/photos", config.Conf.AlbumStorePathOnWin)
	}
	r.MaxMultipartMemory = 20 << 20

	r.POST("/user/login", handlers.UserLogIn)
	r.GET("/user/info", handlers.QueryUserInfo)
	r.POST("/user/logout", handlers.Logout)
	r.POST("/create_album", handlers.AddAlbum)
	r.POST("/album_list", handlers.GetAlbumList)
	r.POST("/photo_list", handlers.GetPhotoList)
	r.POST("/remove_album", handlers.RemoveAlbum)
	r.POST("/upload/photo/:name", handlers.UploadPhoto)

	r.Run(":8080")
}
