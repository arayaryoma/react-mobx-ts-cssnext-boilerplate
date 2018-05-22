import * as React from "react";
import { observer } from "mobx-react";
import ToDoState, { ToDo } from "../../store/to-do-store";

export default class ToDoComponent extends React.Component {
    public render() {
        const toDoState = new ToDoState();
        return (
            <div>
                <ToDoList toDoState={toDoState}/>
                <div>
                    <button onClick={() => {
                        toDoState.add(`New Item Created At ${Date.now()}`);
                    }}>New ToDo
                    </button>
                </div>
            </div>
        );
    }

}

@observer
class ToDoList extends React.Component<{ toDoState: ToDoState }> {
    public render() {
        return (
            <ul>
                {this.props.toDoState.toDoList.map(item => (
                    <div>
                        <ToDoItem item={item}/>
                        <button onClick={() => this.props.toDoState.remove(item._id)}>Remove</button>
                    </div>
                ))}
            </ul>
        );
    }
}

class ToDoItem extends React.Component<{ item: ToDo }> {
    public render() {
        return (
            <li>{this.props.item.title}
            </li>
        );
    }
}
