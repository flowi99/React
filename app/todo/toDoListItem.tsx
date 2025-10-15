interface ToDoListItemProps {
    id?: number,
    title?: string,
    completed?: boolean
}

export function ToDoListItem({id, title, completed}: ToDoListItemProps) {
    const item = {id, title, completed};

    return (
        <li key={item.id}>
            <input type={"checkbox"} checked={item.completed} />
            {item.title}
        </li>
    );
}