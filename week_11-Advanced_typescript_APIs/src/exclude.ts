type Eventful = 'click' | 'scroll' | 'mousemove';
type ExcludeEvent = Exclude<Eventful, 'scroll'>; // 'click' | 'mousemove'

const handleEvent = (event: ExcludeEvent) => {
  console.log(`Handling event: ${event}`);
};

handleEvent('click'); // OK