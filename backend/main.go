package main

///We are going to be using Fiber as our HTTP engine to make requests 
import (
	// "fmt"
	"log"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
)

//to house our todos, we're going to use a struct with different key values pairs and also define 
//what will be returened in json
type Todo struct {
	ID int `json:"id"`
	Task string `json:"task"`
	IsComplete bool `json:"complete"`

}

func main(){
	// fmt.Println("Hello World")

	app := fiber.New()
	app.Use(cors.New(cors.Config{
		AllowOrigins: "http://localhost:3000",
		AllowHeaders: "Origin, Content-Type, Accept",
	}))

	//We'll be saving the list of todos in memory so we'll create a slice of todos with the Todo struct

	todos := []Todo{}

	app.Get("/healthcheck", func(c *fiber.Ctx) error {
		return c.SendString("OK")
	})

	//This endpoint sends a POST request to create our todo
	app.Post("/api/todos", func(c *fiber.Ctx) error {
		//we create a todo variable using the struct above
		todo := &Todo{}
		//Bodyparser binds the request body to a struct 
		if err := c.BodyParser(todo); err != nil {
			return err
		}

		todo.ID = len(todos) + 1
		todos = append(todos, *todo)

		return c.JSON(todos)
	})

	//This endpoint sends a PATCH request to complete an individual todo
	app.Patch("/api/todos/:id/complete", func(c *fiber.Ctx) error {
		id, err := c.ParamsInt("id")

		if err != nil {
			return c.Status(401).SendString("Invalid id")
		}

		for i, t := range todos {
			if t.ID == id {
				todos[i].IsComplete = true
				break
			}
		}

		return c.JSON(todos)
	})

	//This endpoint sends a PATCH request to edit an individual todo
	app.Patch("/api/todos/:id/edit", func(c *fiber.Ctx) error {
		id, err := c.ParamsInt("id")
		task := c.BodyParser()

		if err != nil {
			return c.Status(401).SendString("Invalid id")
		}

		for i, t := range todos {
			if t.ID == id {
				todos[i].Task = task
				break
			}
		}

		return c.JSON(todos)
	})	

	//This endpoint sends a GET request to retrieve all Todos 
	app.Get("/api/todos", func(c *fiber.Ctx) error {
		return c.JSON(todos)
	})

	log.Fatal(app.Listen(":4000"))
}