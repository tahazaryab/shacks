import {
    Timeline,
    TimelineItem,
    TimelineConnector,
    TimelineHeader,
    TimelineIcon,
    TimelineBody,
    Typography,
  } from "@material-tailwind/react";
   
  export function DefaultTimeline() {
    return (
      <div className="text-center flex items-center w-[32rem]">
        <Timeline>
          <TimelineItem>
          <div className="absolute pt-9 left-[-70px]">
        <div
            className="relative w-7 h-7 rounded-full border-2 border-black bg-green-100 border-black'
            }"
          >
          </div>

        </div>
        <div className="absolute left-[-57px] top-[75px] h-20 border-l-2 border-black"></div> 
            <TimelineConnector />
            <TimelineHeader className="h-3 pb-1">
              <TimelineIcon />
              <Typography variant="h6" color="blue-gray" className="leading-none">Ticket Created.
              </Typography>
            </TimelineHeader>
            <TimelineBody className="pb-8">
              <Typography variant="small" color="gray" className="font-normal text-gray-600">
              This is where it all starts. When you submit a request or report an issue, it's logged into our system. We assign a unique identifier and capture all the necessary details. This helps us keep track of your request and ensures that nothing falls through the cracks.
              </Typography>
            </TimelineBody>
          </TimelineItem>
          <TimelineItem>
        <div className="absolute pt-9 left-[-70px]">
        <div
            className="relative w-7 h-7 rounded-full border-2 border-black bg-green-100 border-black'
            }"
          >
          </div>

        </div>
        <div className="absolute left-[-57px] top-[75px] h-20 border-l-2 border-black"></div> 
            <TimelineConnector />
            <TimelineHeader className="h-3">
              <TimelineIcon />
              <Typography variant="h6" color="blue-gray" className="leading-none">
                Investigation.
              </Typography>
            </TimelineHeader>
            <TimelineBody className="pb-8">
              <Typography variant="small" color="gray" className="font-normal text-gray-600">
              Once your ticket is in, our system goes to work. It categorizes and prioritizes based on the urgency and complexity of the issue. We use smart algorithms to gather relevant information and even suggest possible solutions. Our goal here is to make sure your request gets to the right team for investigation.
              </Typography>
            </TimelineBody>
          </TimelineItem>
          <TimelineItem>
          <div className="absolute pt-9 left-[-70px]">
        <div
            className="relative w-7 h-7 rounded-full border-2 border-black bg-green-100 border-black'
            }"
          >
          </div>

        </div>
        <div className="absolute left-[-57px] top-[75px] h-20 border-l-2 border-black"></div> 
            <TimelineHeader className="h-3">
              <TimelineIcon />
              <Typography variant="h6" color="blue-gray" className="leading-none">
                Escalation.
              </Typography>
            </TimelineHeader>
            <TimelineBody className="pb-8">
              <Typography variant="small" color="gray" className="font-normal text-gray-600">
              If your situation needs some extra attention, don't worry – we've got it covered. The escalation phase kicks in automatically. This means that if your ticket requires specialized expertise, it's routed to the right people who can handle it best. This ensures that your issue gets the attention it deserves.
              </Typography>
            </TimelineBody>
          </TimelineItem>
          <TimelineItem>
          <div className="absolute pt-9 left-[-70px]">
        <div
            className="relative w-7 h-7 rounded-full border-2 border-black bg-green-100 border-black'
            }"
          >
          </div>

        </div>
        <div className="absolute left-[-57px] top-[75px] h-20 border-l-2 border-black"></div> 
            <TimelineHeader className="h-3">
              <TimelineIcon />
              <Typography variant="h6" color="blue-gray" className="leading-none">
                Resolution.
              </Typography>
            </TimelineHeader>
            <TimelineBody className="pb-8">
              <Typography variant="small" color="gray" className="font-normal text-gray-600">
              This is the phase where the magic happens. Our experts work on addressing your issue or request. We keep track of all the actions taken and the solutions implemented. This way, we maintain a detailed record of what's been done to solve your problem.
              </Typography>
            </TimelineBody>
          </TimelineItem>
          <TimelineItem>
          <div className="absolute pt-9 left-[-70px]">
        <div
            className="relative w-7 h-7 rounded-full border-2 border-black bg-green-100 border-black'
            }"
          >
        
              <div className="absolute w-6 h-6 border-white border-2 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
          </div>

        </div>
            <TimelineHeader className="h-3">
              <TimelineIcon />
              <Typography variant="h6" color="blue-gray" className="leading-none">
                Complete.
              </Typography>
            </TimelineHeader>
            <TimelineBody className="pb-8">
              <Typography variant="small" color="gray" className="font-normal text-gray-600">
                Once your issue is resolved, we're not quite done yet. We update your ticket's status to "Complete." This phase serves as confirmation that your problem has been successfully sorted out. It's also when we generate reports that show the journey your ticket went through – how long it took to get resolved and any insights we gained along the way.
              </Typography>
            </TimelineBody>
          </TimelineItem>
        </Timeline>
      </div>
    );
  }