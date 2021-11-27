package config

import (
	"fmt"
	"gopkg.in/ini.v1"
	"log"
	"sync"
)

type Config struct {
	App
	Mysql
}

type (
	App struct {
		Addr                  string   `ini:"addr"`
		AllowOrigins          []string `ini:"allow_origins"`
		AlbumStorePathOnLinux string   `ini:"album_store_path_on_linux"`
		AlbumStorePathOnWin   string   `ini:"album_store_path_on_win"`
	}

	Mysql struct {
		Connect string `ini:"connect"`
		MaxIdle int    `ini:"max_idle"`
		MaxOpen int    `init:"max_open"`
	}
)

var (
	Conf *Config
	once sync.Once
)

func NewConfig(env string) {
	once.Do(func() {
		cfg, err := ini.ShadowLoad(fmt.Sprintf("config/%s.ini", env))
		if err != nil {
			log.Fatal(err)
		}

		c := new(Config)
		err = cfg.MapTo(c)
		Conf = c
		fmt.Printf("Config: %+v\n", c)
	})
}
