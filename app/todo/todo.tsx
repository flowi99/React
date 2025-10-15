import React from "react";
import {ToDoListItem} from "~/todo/toDoListItem";
import {Termin} from "~/todo/termin";

export function ToDo(){
    const tasks = [
        { id: 1, title: "Einkaufen", completed: false },
        { id: 2, title: "Hausaufgaben machen", completed: true },
        { id: 3, title: "Spazieren gehen", completed: false },
    ];

    return (
        <div>
            <b>Meine WunderListe</b>

            <Termin warning={"Knapp!"}/>
            {/* Loop over tasks array to create ToDoListItems */}
            <ul>
                {tasks.map((item) => (
                    <ToDoListItem id={item.id} title={item.title} completed={item.completed} />
                ))}
            </ul>

        </div>
    )
}