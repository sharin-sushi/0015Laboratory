package main

import (
	"fmt"

	"github.com/sharin-sushi/0015docker/user"
)

type IListener interface {
	GetListener(user.ListenerId) *user.Listener
	CreateListener(string) *user.Listener
	// GetVtuber(user.VtuberId) *user.Vtuber
}

// cannot use db (variable of type *user.ListenerDatabase) as IListener value in argument to userGet
// : *user.ListenerDatabase does not implement IListener (missing method GetVtuber)

func main() {
	db := user.NewListenerDatabase()
	fmt.Printf("db type=%#v\n", db)
	fmt.Printf("db=%v, %t,\n", db, db)

	var id user.ListenerId = 1
	gotListener := listenerGet(db, id)
	fmt.Printf("gotListener=%v \n", gotListener)

	var name string = "sharin"
	newListenr := listenerCreate(db, name)
	fmt.Printf("newListenr=%v \n", newListenr)
}

func listenerGet(u IListener, id user.ListenerId) *user.Listener {
	fmt.Print("\"fetch\"\n")
	return u.GetListener(id)
}

func listenerCreate(u IListener, name string) *user.Listener {
	fmt.Print("\"fetch\"\n")
	return u.CreateListener(name)
}
