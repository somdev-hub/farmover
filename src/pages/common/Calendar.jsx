import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import { Paper } from "@mui/material";

import "react-big-calendar/lib/css/react-big-calendar.css";
import { useEffect, useState } from "react";
import { getCalendarEvents } from "../../apis/api";

const localizer = momentLocalizer(moment);

const CalendarPage = () => {
  const [calendarEvents, setCalendarEvents] = useState([]);

  useEffect(() => {
    const fetchCalendarEvents = async () => {
      const response = await getCalendarEvents();
      // console.log(response);

      const responseWithDate = response?.map((event) => {
        const endDate = event.end ? new Date(event.end) : new Date();
        return {
          title: event.title,
          start: new Date(event.start),
          end: endDate
        };
      });

      setCalendarEvents(responseWithDate);
    };
    fetchCalendarEvents();
  }, []);
  return (
    <div>
      <div className="mt-10">
        <Paper className="p-1 sm:p-5">
          {/* <h1 className="text-2xl font-bold">Calendar</h1> */}
          <Calendar
            localizer={localizer}
            events={calendarEvents}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 600 }}
          />
        </Paper>
      </div>
    </div>
  );
};

export default CalendarPage;
