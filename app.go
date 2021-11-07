package main

import (
	"GoGallery/config"
	"GoGallery/database"
	"GoGallery/handlers"
	"GoGallery/model"
	"github.com/gin-contrib/multitemplate"
	"github.com/gin-gonic/gin"
	"net/http"
)

func createMyRender() multitemplate.Renderer {
	r := multitemplate.NewRenderer()
	r.AddFromFiles("web_disk_login", "templates/auth-login.html")
	r.AddFromFiles("web_disk_auth_create", "templates/auth-create.html")
	r.AddFromFiles("web_disk_index", "templates/web_disk_index.html")
	return r
}

func main() {
	config.NewConfig("dev")
	database.NewMysql()
	model.InitUserSqlStruct()

	r := gin.Default()
	r.HTMLRender = createMyRender()
	r.Static("/static", "./static")
	r.GET("/web_disk_log_in", func(c *gin.Context) {
		c.HTML(http.StatusOK, "web_disk_login", gin.H{})
	})
	r.GET("/web_disk_auth_create", func(c *gin.Context) {
		c.HTML(http.StatusOK, "web_disk_auth_create", gin.H{})
	})
	r.GET("/web_disk_index/:userID", handlers.WebDiskIndex)

	r.POST("/web_disk_log_in", handlers.WebDiskLogIn)
	r.POST("/web_disk_auth_create", handlers.WebDiskCreateAuth)
	r.Run(":8080")
}
