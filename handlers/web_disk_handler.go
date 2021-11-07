package handlers

import (
	"GoGallery/model"
	"github.com/gin-gonic/gin"
	"log"
	"net/http"
)

func WebDiskIndex(c *gin.Context) {
	userID := c.Param("userID")
	cookie, err := c.Cookie("_cookie")
	if err != nil {
		log.Printf("Get cookie failed! err: %+v\n", err)
		c.Redirect(302, "/web_disk_log_in")
	}
	hasCorrectCookie := model.CheckCookieByUserID(userID, cookie)
	if hasCorrectCookie {
		c.HTML(http.StatusOK, "web_disk_index", gin.H{})
	} else {
		c.Redirect(302, "/web_disk_log_in")
	}
}
