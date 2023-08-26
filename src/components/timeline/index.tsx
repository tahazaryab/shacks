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
      <div className=" items-center w-[32rem]">
        <Timeline>
          <TimelineItem>
            <TimelineConnector />
            <TimelineHeader className="h-3">
              <TimelineIcon />
              <Typography variant="h6" color="blue-gray" className="leading-none">
                Ticket Created.
              </Typography>
            </TimelineHeader>
            <TimelineBody className="pb-8">
              <Typography variant="small" color="gray" className="font-normal text-gray-600">
              This is where it all starts. When you submit a request or report an issue, it's logged into our system. We assign a unique identifier and capture all the necessary details. This helps us keep track of your request and ensures that nothing falls through the cracks.
              </Typography>
            </TimelineBody>
          </TimelineItem>
          <TimelineItem>
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