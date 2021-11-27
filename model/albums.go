package model

import (
	"GoGallery/database"
	_ "gorm.io/gorm"
	"gorm.io/plugin/soft_delete"
	"log"
	"os"
	"path/filepath"
	"strconv"
	"time"
)

const (
	PhotoBasePath = "F:\\albums\\"
)

type Album struct {
	ID        uint `gorm:"primaryKey"`
	CreatedAt time.Time
	UpdatedAt time.Time
	DeletedAt soft_delete.DeletedAt `gorm:"index;uniqueIndex:udx_name"`
	UserId    uint
	Name      string `json:"name" form:"name" gorm:"not null;uniqueIndex:udx_name;size:128"`
	Path      string `gorm:"not null"`
}

type Photo struct {
	ID        uint `gorm:"primaryKey"`
	CreatedAt time.Time
	UpdatedAt time.Time
	DeletedAt soft_delete.DeletedAt `gorm:"index;uniqueIndex:udx_name"`
	AlbumId   uint
	Name      string `gorm:"not null;uniqueIndex:udx_name;size:128" json:"photo_name"`
	Link      string `json:"url" gorm:"not null"`
	Path      string `gorm:"not null"`
}

func InitAlbumSqlStruct() {
	album := &Album{}
	photo := &Photo{}
	database.Mysql.AutoMigrate(album)
	database.Mysql.AutoMigrate(photo)
}

func (album *Album) CreateAlbum() error {
	albumPath := filepath.Join(PhotoBasePath, strconv.Itoa(int(album.UserId)), album.Name)
	exists, err := PathExists(albumPath)
	if err != nil {
		return err
	}
	if !exists {
		err := os.MkdirAll(albumPath, os.ModePerm)
		if err != nil {
			return err
		}
	}
	album.Path = albumPath
	result := database.Mysql.Create(album)
	if result.Error != nil {
		log.Printf("Create new album failed! Error: %+v\n", result.Error)
		return result.Error
	}
	return nil
}

func (album *Album) GetPhotoInfo() ([]*Photo, error) {
	var photos []*Photo
	database.Mysql.Where("album_id = ?", album.ID).Find(&photos)
	return photos, nil
}

func (album *Album) RemoveAlbum() error {
	var photos []*Photo
	database.Mysql.Where("album_id = ?", album.ID).Find(&photos)
	database.Mysql.Delete(photos)
	database.Mysql.Delete(&album)
	os.RemoveAll(album.Path)
	return nil
}

func (album *Album) AddPhoto(photo *Photo) error {
	database.Mysql.Create(photo)
	return nil
}
