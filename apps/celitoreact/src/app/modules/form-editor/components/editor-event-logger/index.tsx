import { useCallback, useContext, useEffect, useState } from "react";
import * as S from './styles';
import { EditorEventTypes, IEventInfo, ISusbscribe } from "../../store/editor-context-provider/types";
import { EditorContext } from "../../store/editor-context-provider";

export default function EditorEventLogger() {
    const [eventsExecuted, SetEventsExecuted] = useState<IEventInfo[]>([]);
    const editorContext = useContext(EditorContext);

    const handleEventExecuted = useCallback((eventInfo: IEventInfo) => {
        SetEventsExecuted((oldEventsExecuted) => [eventInfo, ...oldEventsExecuted]);
    },[]);

    useEffect(()=> {
        if (editorContext) {
            const susbscribers: ISusbscribe[] = [
                {eventName: EditorEventTypes.OnAddSection, callback: handleEventExecuted},
                {eventName: EditorEventTypes.OnEditSection, callback: handleEventExecuted},
                {eventName: EditorEventTypes.OnDeleteSection, callback: handleEventExecuted},
                {eventName: EditorEventTypes.OnAddRow, callback: handleEventExecuted},
                {eventName: EditorEventTypes.OnAddElement, callback: handleEventExecuted},
                {eventName: EditorEventTypes.OnEditElement, callback: handleEventExecuted},
                {eventName: EditorEventTypes.OnDeleteElement, callback: handleEventExecuted},
            ]
            editorContext?.Subscribe(susbscribers);
            return (() => {
                const unSusbscribers: ISusbscribe[] = [
                    {eventName: EditorEventTypes.OnAddSection, callback: handleEventExecuted},
                    {eventName: EditorEventTypes.OnEditSection, callback: handleEventExecuted},
                    {eventName: EditorEventTypes.OnDeleteSection, callback: handleEventExecuted},
                    {eventName: EditorEventTypes.OnAddRow, callback: handleEventExecuted},
                    {eventName: EditorEventTypes.OnAddElement, callback: handleEventExecuted},
                    {eventName: EditorEventTypes.OnEditElement, callback: handleEventExecuted},
                    {eventName: EditorEventTypes.OnDeleteElement, callback: handleEventExecuted},
                ]
                editorContext?.Unsubscribe(unSusbscribers);
            });
        }
    },[]);

    return (
        <div>
        {
            editorContext && editorContext?.showLogger && 
            <S.RootContainer>Events executed:
                <div>&nbsp;</div>
                <S.EventsContainer>
                {
                    eventsExecuted.map((eventExecuted, index) => 
                        <S.EventContainer key={index}>
                            <S.EventAttribute>Name:</S.EventAttribute> {eventExecuted.eventName}
                            <br/>
                            <S.EventAttribute>Date:</S.EventAttribute> {eventExecuted.timestamp.toLocaleString()}
                            <br/>
                            <S.EventAttribute>Detail:</S.EventAttribute> {JSON.stringify(eventExecuted.detail, null, 2)}
                        </S.EventContainer>
                    )
                }
                </S.EventsContainer>
            </S.RootContainer>
        }
        </div>
    )
}