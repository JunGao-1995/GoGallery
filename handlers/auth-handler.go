package handlers

import (
	"GoGallery/model"
	"github.com/gin-gonic/gin"
	"log"
	"net/http"
	"strings"
	"time"
)

func UserLogIn(c *gin.Context) {
	log.Printf("User log in request content:%+v\n", c)
	var user model.User
	if err := c.ShouldBind(&user); err != nil {
		log.Printf("User log in params not found. err: %s", err)
		c.JSON(http.StatusOK, gin.H{
			"status":  http.StatusNotFound,
			"message": "User info is incomplete!",
		})
		return
	}
	log.Printf("%+v\n", user)
	foundUser, isExists := user.FindUserByName()
	if !isExists {
		log.Printf("User not found in database !")
		c.JSON(http.StatusOK, gin.H{
			"status":  http.StatusNotFound,
			"message": "User not found!",
		})
		return
	}
	if foundUser.CheckPassword(user.Password) {
		session, err := foundUser.CreateSession()
		if err != nil {
			log.Printf("Create session failed, err: %s", err)
			c.JSON(http.StatusOK, gin.H{
				"status":  http.StatusNotFound,
				"message": "User info is incomplete!",
			})
			return
		}
		c.JSON(http.StatusOK, gin.H{
			"status":  http.StatusOK,
			"message": "success",
			"data": gin.H{
				"token": session.Uuid,
			},
			"timestamp": time.Now(),
		})
	} else {
		c.JSON(http.StatusOK, gin.H{
			"status":  http.StatusNotFound,
			"message": "User password is not correct!",
		})
	}
}

func QueryUserInfo(c *gin.Context) {
	user, ok := c.Get("user")
	if ok {
		user, ok := user.(*model.User)
		if ok && user.ID > 0 {
			c.JSON(http.StatusOK, gin.H{
				"code": http.StatusOK,
				"data": gin.H{
					"roles":        strings.Split(user.Roles, ","),
					"introduction": user.Introduction,
					"name":         user.Name,
					"avatar":       user.Avatar,
				},
			})
			return
		}
	}
	log.Println("Token not availiable!")
	c.JSON(http.StatusNotFound, nil)
	return
}

func Logout(c *gin.Context) {
	token, ok := c.Get("token")
	if ok {
		token, ok := token.(string)
		if ok && len(token) > 0 {
			model.RemoveToken(token)
			c.JSON(http.StatusOK, gin.H{
				"code": http.StatusOK,
				"data": "success",
			})
		}
	}
}
