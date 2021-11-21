package model

import "gorm.io/gorm"

type WebDiskFile struct {
	gorm.Model
	FilePath string
	FileName string
	FileType string
	UserId   uint
}
