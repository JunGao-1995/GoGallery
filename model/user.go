package model

import (
	"GoGallery/database"
	"gorm.io/gorm"
	"log"
	"strconv"
)

type User struct {
	gorm.Model
	Name     string
	Password string
	Email    string
	Sessions []Session
}

type Session struct {
	gorm.Model
	Uuid   string
	UserId uint
}

func InitUserSqlStruct() {
	user := &User{}
	session := &Session{}
	database.Mysql.AutoMigrate(user)
	database.Mysql.AutoMigrate(session)
}

func (user *User) CreateNewUser() {
	result := database.Mysql.Create(&user)
	if result.Error != nil {
		log.Printf("Create new user failed! Error: %+v\n", result.Error)
	}
}

func (user *User) CreateSession() (session *Session, err error) {
	uuid := CreateUUID()
	session = &Session{Uuid: uuid, UserId: user.ID}
	result := database.Mysql.Create(&session)
	if result.Error != nil {
		return nil, result.Error
	} else {
		return session, nil
	}
}

func CheckCookieByUserID(userId string, cookie string) (hasCorrectCookie bool) {
	userIdUint, _ := strconv.ParseUint(userId, 10, 32)
	session := &Session{UserId: uint(userIdUint), Uuid: cookie}
	log.Printf("Session: %+v\n", session)
	_ = database.Mysql.Where(session).First(session)
	if session.ID != 0 {
		log.Printf("Check %s's cookie %s, result: %t", userId, cookie, true)
		return true
	} else {
		log.Printf("Check %s's cookie %s, result: %t", userId, cookie, false)
		return false
	}
}

func UserByEmail(email string) (user *User, isExists bool) {
	user = &User{Email: email}
	database.Mysql.Where(user).First(user)
	if user.ID != 0 {
		return user, true
	} else {
		return user, false
	}
}
