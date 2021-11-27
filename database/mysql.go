package database

import (
	"GoGallery/config"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
	"gorm.io/gorm/logger"
	"sync"
)

var (
	Mysql *gorm.DB
	once  sync.Once
)

func NewMysql() *gorm.DB {
	once.Do(func() {
		db, err := gorm.Open(mysql.Open(config.Conf.Mysql.Connect), &gorm.Config{
			Logger: logger.Default.LogMode(logger.Info),
		})
		if err != nil {
			panic(err)
		}
		Mysql = db
	})
	return Mysql
}
