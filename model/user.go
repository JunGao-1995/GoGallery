package model

import (
	"GoGallery/database"
	"gorm.io/gorm"
	"log"
	"strconv"
)

type User struct {
	gorm.Model
	Name         string `json:"username" gorm:"primaryKey;uniqueIndex:udx_name"`
	Password     string `json:"password"`
	Roles        string `gorm:"type:text"`
	Introduction string
	Avatar       string
}

type Session struct {
	gorm.Model
	Uuid   string `json:"token", gorm:"primaryKey"`
	UserId uint
}

func InitUserSqlStruct() {
	user := &User{}
	session := &Session{}
	database.Mysql.AutoMigrate(user)
	database.Mysql.AutoMigrate(session)
	database.Mysql.Where(User{Name: "gaojun",
		Password: "testtesttest",
		Roles:    "admin"}).FirstOrCreate(&user)
}

func (user *User) CreateNewUser() {
	result := database.Mysql.Create(&user)
	if result.Error != nil {
		log.Printf("Create new user failed! Error: %+v\n", result.Error)
	}
}

func (user *User) CreateSession() (session *Session, err error) {
	uuid := CreateUUID()
	log.Printf("%+v\n", user)
	session = &Session{Uuid: uuid, UserId: user.ID}
	result := database.Mysql.Create(&session)
	if result.Error != nil {
		return nil, result.Error
	} else {
		return session, nil
	}
}

func FindUserByToken(token string) (*User, bool) {
	foundSession := &Session{}
	database.Mysql.Where(&Session{Uuid: token}).First(foundSession)
	if foundSession.ID > 0 {
		user := &User{}
		database.Mysql.Where(&User{Model: gorm.Model{ID: foundSession.UserId}}).First(user)
		return user, true
	} else {
		return nil, false
	}
}

func RemoveToken(token string) {
	foundSession := &Session{}
	database.Mysql.Where(&Session{Uuid: token}).First(&foundSession)
	if foundSession.ID > 0 {
		database.Mysql.Delete(foundSession)
	}
}

func (user *User) FindUserByName() (*User, bool) {
	foundUser := &User{}
	database.Mysql.Where(&User{Name: user.Name}).First(&foundUser)
	if foundUser.ID != 0 {
		return foundUser, true
	} else {
		return nil, false
	}
}

func (user *User) CheckPassword(password string) bool {
	if password == user.Password {
		return true
	} else {
		return false
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

func (user *User) GetAlbumListByUser() []*Album {
	var albums []*Album
	log.Printf("%+v\n", user)
	database.Mysql.Where("user_id = ?", user.ID).Find(&albums)
	// database.Mysql.Where(&Album{UserId: user.ID}).Find(albums)
	return albums
}

func (user *User) GetAlbumByUser(albumName string) (*Album, bool) {
	var album *Album
	log.Printf("%+v\n", user)
	database.Mysql.Where("user_id = ? AND name = ?", user.ID, albumName).First(&album)
	// database.Mysql.Where(&Album{UserId: user.ID}).Find(albums)
	if album.ID > 0 {
		return album, true
	} else {
		return nil, false
	}

}

/*
func GetUserByToken(token string) (user *User, isCorrectToken bool) {
}
*/
