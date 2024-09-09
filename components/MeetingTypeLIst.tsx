"use client";

import Image from "next/image";
import React, { useState } from "react";
import HomeCard from "./HomeCard";
import { useRouter } from "next/navigation";
import MeetingModal from "./MeetingModal";

export default function MeetingTypeLIst() {
  const router = useRouter();
  const [meetingState, setMeetingState] = useState<
    | "isSchedualeMeeting"
    | "isJoiningMeeting"
    | "isInstanMeeting"
    | undefined
  >();
  //create meeting
  const createMeeting = () => {};

  return (
    <section className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
      <HomeCard
        img="/icons/add-meeting.svg"
        title="New Meeting"
        description="Start an intstant meeting"
        handleClick={() => setMeetingState("isInstanMeeting")}
        className="bg-orange-1"
      />
      <HomeCard
        img="/icons/join-meeting.svg"
        title="Join Meeting"
        description="via invitaion link"
        handleClick={() => setMeetingState("isJoiningMeeting")}
        className="bg-blue-1"
      />
      <HomeCard
        img="/icons/schedule.svg"
        title="Schedule Meeting"
        description="Plan your meeting"
        handleClick={() => setMeetingState("isSchedualeMeeting")}
        className="bg-purple-1"
      />
      <HomeCard
        img="/icons/recordings.svg"
        title="View Recordings"
        description="Check out your recordings"
        handleClick={() => router.push("/recordings")}
        className="bg-yellow-1"
      />

      <MeetingModal
        isOpen={meetingState === "isInstanMeeting"}
        onClose={() => setMeetingState(undefined)}
        title={"Start an instant Meeting"}
        className="text-center"
        buttonText="Start Meeting"
        handleClick={createMeeting}
        buttonIcon=""
      />
    </section>
  );
}
