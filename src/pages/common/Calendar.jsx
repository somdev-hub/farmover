import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import { Paper } from "@mui/material";

import "react-big-calendar/lib/css/react-big-calendar.css";
import { useEffect, useState } from "react";
import { getCalendarEvents } from "../../apis/api";

const localizer = momentLocalizer(moment);

const CalendarPage = () => {
  const [calendarEvents, setCalendarEvents] = useState([]);

  const events = [
    {
      title: "Spring Planting Kickoff",
      start: new Date(2024, 3, 1),
      end: new Date(2024, 3, 4)
    },
    {
      title: "Organic Fertilization Methods",
      start: new Date(2024, 3, 8),
      end: new Date(2024, 3, 11)
    },
    {
      title: "Integrated Pest Management Workshop",
      start: new Date(2024, 3, 15),
      end: new Date(2024, 3, 18)
    },
    {
      title: "High-Yield Crop Varieties Seminar",
      start: new Date(2024, 3, 22),
      end: new Date(2024, 3, 25)
    },
    {
      title: "Sustainable Farming Practices Conference",
      start: new Date(2024, 4, 1),
      end: new Date(2024, 4, 4)
    },
    {
      title: "Soil Health and Conservation Techniques",
      start: new Date(2024, 4, 8),
      end: new Date(2024, 4, 11)
    },
    {
      title: "Precision Agriculture Technology Expo",
      start: new Date(2024, 4, 15),
      end: new Date(2024, 4, 18)
    },
    {
      title: "Irrigation Efficiency Strategies",
      start: new Date(2024, 4, 22),
      end: new Date(2024, 4, 25)
    },
    {
      title: "Crop Rotation and Diversity Planning",
      start: new Date(2024, 5, 1),
      end: new Date(2024, 5, 4)
    },
    {
      title: "Harvest Management and Post-Harvest Care",
      start: new Date(2024, 5, 8),
      end: new Date(2024, 5, 11)
    }
  ];

  useEffect(() => {
    const fetchCalendarEvents = async () => {
      const response = await getCalendarEvents();
      const responseWithDate = response.map((event) => {
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
        <Paper className="p-5">
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
