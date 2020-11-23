import React, {useContext, useRef} from "react";
import {Note, NoteAction} from "../../lib/reducers/notes";
import {Context} from "../../lib/context";
import { ItemTypes } from '../../lib/itemtypes';
import {Column, Project} from "../../lib/reducers/projects";

import { useDrag, useDrop, DropTargetMonitor } from 'react-dnd'
import { XYCoord } from 'dnd-core'

interface NoteListItemProps {
    note: Note
    project: Project
    column: Column
    index: number
    id: number
    moveCard: (dragIndex: number, hoverIndex: number) => void
}

interface DragItem {
    index: number
    id: string
    type: string
}

export function NoteListItem(props: NoteListItemProps) {
    const {note, column, index, id, moveCard} = props
    const {dispatch} = useContext(Context);

    const ref = useRef<HTMLDivElement>(null)
    const [, drop] = useDrop({
        accept: ItemTypes.CARD,
        hover(item: DragItem, monitor: DropTargetMonitor) {
            if (!ref.current) {
                return
            }
            const dragIndex = item.index
            const hoverIndex = index

            // Don't replace items with themselves
            if (dragIndex === hoverIndex) {
                return
            }

            // Determine rectangle on screen
            const hoverBoundingRect = ref.current?.getBoundingClientRect()

            // Get vertical middle
            const hoverMiddleY =
                (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2

            // Determine mouse position
            const clientOffset = monitor.getClientOffset()

            // Get pixels to the top
            const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top

            // Only perform the move when the mouse has crossed half of the items height
            // When dragging downwards, only move when the cursor is below 50%
            // When dragging upwards, only move when the cursor is above 50%

            // Dragging downwards
            if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
                return
            }

            // Dragging upwards
            if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
                return
            }

            // Time to actually perform the action
            moveCard(dragIndex, hoverIndex)

        },
    })

    const [{ isDragging }, drag] = useDrag({
        item: { type: ItemTypes.CARD, id, index },
        collect: (monitor: any) => ({
            isDragging: monitor.isDragging(),
        }),
    })

    const opacity = isDragging ? 0 : 1
    drag(drop(ref))

    return (<article key={note.id} className="message" ref={ref} style={{ opacity }}>
        <div className="message-body">
            <div className="columns is-vcentered">
                <div className="column">
                    {note.content}
                </div>
                <div className="column has-text-right">
                    <button className="button is-small" aria-label={"move-note-up-" + column.id}
                            onClick={() => dispatch({
                                type: 'move_note_up',
                                note: note
                            } as NoteAction)}><span className="icon is-small">
                              <i className="fas fa-arrow-up"/>
                            </span>
                    </button>
                    <button className="button is-small ml-2 mr-2" aria-label={"move-note-down-" + column.id}
                            onClick={() => dispatch({
                                type: 'move_note_down',
                                note: note
                            } as NoteAction)}><span className="icon is-small">
                              <i className="fas fa-arrow-down"/>
                            </span>
                    </button>
                    <button className="button is-small is-danger" aria-label={"remove-note-" + note.id}
                            onClick={() => dispatch({
                                type: 'remove_note',
                                note: note
                            } as NoteAction)}><span className="icon is-small">
                              <i className="fas fa-times"/>
                            </span>
                    </button>
                </div>
            </div>
        </div>
    </article>);
}