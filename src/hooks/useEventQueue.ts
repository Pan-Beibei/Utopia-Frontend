import { useState, useEffect } from "react";

type Event<T> = T;

function useEventQueue<T>(
  processEvent: (event: Event<T>) => void,
  initialEvents: Event<T>[] = []
) {
  const [eventQueue, setEventQueue] = useState<Event<T>[]>(initialEvents);
  const [isProcessingEvent, setIsProcessingEvent] = useState(false);

  useEffect(() => {
    const processNextEvent = async () => {
      if (!isProcessingEvent && eventQueue.length > 0) {
        const event = eventQueue[0];
        setIsProcessingEvent(true);
        await processEvent(event);
        setIsProcessingEvent(false);
        setEventQueue((prevQueue) => prevQueue.slice(1));
        console.log("eventQueue");
      }
    };

    processNextEvent();
  }, [eventQueue, isProcessingEvent, processEvent]);

  const addEvent = (event: Event<T>) => {
    setEventQueue((prevQueue) => [...prevQueue, event]);
  };

  return { addEvent };
}

export default useEventQueue;
