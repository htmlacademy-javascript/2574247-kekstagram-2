const timeFormatting = function(timeInFormat){
  return +timeInFormat.split(':')[0] * 60 + (+timeInFormat.split(':')[1]);
};

const isMeetingValid = function(startWork, endWork, startMeeting, meetingTime){
  const startWorkInMinutes = timeFormatting(startWork);
  const endWorkInMinutes = timeFormatting(endWork);
  const startMeetingInMinutes = timeFormatting(startMeeting);
  const result = startWorkInMinutes <= startMeetingInMinutes &&
  endWorkInMinutes >= startMeetingInMinutes + meetingTime;
  return result;
};
isMeetingValid('08:00', '17:30', '14:00', 90);
isMeetingValid('8:0', '10:0', '8:0', 120);
isMeetingValid('08:00', '14:30', '14:00', 90);
isMeetingValid('14:00', '17:30', '08:0', 90);
isMeetingValid('8:00', '17:30', '08:00', 900);
