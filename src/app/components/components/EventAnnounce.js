import { Calendar, Clock, FileText, Users } from "lucide-react";

export const EventItem = ({ event, setPreviewUrl }) => (
  <div className="border-b border-gray-100 pb-4 mb-4 last:border-b-0 last:pb-0 last:mb-0">
    <div className="flex items-start gap-3">
      <div
        className="flex-1 cursor-pointer"
        onClick={() => setPreviewUrl(event.eimage)}
      >
        <h3 className="font-semibold text-gray-800 mb-2 leading-tight">
          {event.etitle}
        </h3>
        <p>{event.edescription}</p>
        <div className="flex items-center text-gray-500 text-sm">
          <Clock className="w-4 h-4 mr-1" />
          {event.edate}
        </div>
      </div>
    </div>
  </div>
);

export const AnnouncementItem = ({ announcement }) => (
  <div className="border-b border-gray-100 pb-4 mb-4 last:border-b-0 last:pb-0 last:mb-0">
    <div className="flex items-start gap-3">
      <div className="flex-shrink-0 mt-1">
        <FileText className="w-4 h-4 text-blue-500" />
      </div>
      <div className="flex-1">
        <h3 className="font-semibold text-gray-800 mb-2 leading-tight">
          {announcement.title}
        </h3>
        <p> {announcement.content}</p>
        <div className="flex items-center text-gray-500 text-sm mt-2">
          <Calendar className="w-4 h-4 mr-1" />
          {announcement.createdAt}
        </div>
      </div>
    </div>
  </div>
);
