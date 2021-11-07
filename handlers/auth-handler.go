package handlers

import (
	"GoGallery/model"
	"fmt"
	"github.com/gin-gonic/gin"
	"log"
)

func WebDiskLogIn(c *gin.Context) {
	user, isUserExists := model.UserByEmail(c.PostForm("email"))
	log.Printf("%s user is exists: %t", user.Email, isUserExists)
	if isUserExists {
		if user.Password == model.Encrypt(c.PostForm("password")) {
			session, err := user.CreateSession()
			if err != nil {
				log.Printf("Create session failed, error: %+v\n", err)
			}
			c.SetCookie("_cookie", session.Uuid, 3600, "/", "localhost", false, true)
			c.Redirect(302, fmt.Sprintf("/web_disk_index/%d", user.ID))
		}
	} else {
		c.Redirect(302, "/web_disk_auth_create")
	}
}

func WebDiskCreateAuth(c *gin.Context) {
	_, isWebDiskUserExists := model.UserByEmail(c.PostForm("email"))
	if isWebDiskUserExists {
		c.Redirect(302, "/web_disk_login")
	} else {
		email := c.PostForm("email")
		password := model.Encrypt(c.PostForm("password"))
		name := c.PostForm("name")
		newUser := &model.User{Email: email, Password: password, Name: name}
		newUser.CreateNewUser()
		c.Redirect(302, "/web_disk_login")
	}
}
