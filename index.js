// Система управления событиями

function Event(name, date) {
  this.name = name;
  this.date = date;
  this.registeredParticipants = [];
}
function Participant(name, email) {
  this.name = name;
  this.email = email;
}

Event.prototype.addParticipant = function (participant) {
  if (participant.constructor === Participant) {
    this.registeredParticipants.push(participant);
  } else {
    console.log(`${participant.name} is not from our constructor`);
  }
};

Event.prototype.listParticipants = function () {
  if (this.registeredParticipants.length === 0) {
    console.log("Participants have not yet been registered");
    return;
  }
  console.log("List of participants:");
  this.registeredParticipants.map((participant, index) => {
    return console.log(`${index + 1} ${participant.name}`);
  });
};

Event.prototype.findParticipantByEmail = function (eMail) {
  const participant = this.registeredParticipants.find(
    (participant) => participant.email === eMail
  );
  if (participant) {
    console.log(`Email:${eMail} refers to ${participant.name}`);
  } else {
    console.log(`A participant with ${eMail} has not been registered`);
  }
};

// Tests

const participant1 = new Participant("Dawid", "dawid@gmail.com");
const participant2 = new Participant("Valerij", "valera@gmail.com");
const participant3 = new Participant("Ignat", "ignat@gmail.com");
const stranger = {
  name: "Maksim",
  email: "maksim@gmail.com",
};

const birthDay = new Event("My birthday", "01/12/2024");
const newYear = new Event("NewYear Party", "25/12/2024");

birthDay.addParticipant(participant1);
birthDay.addParticipant(participant2);
birthDay.addParticipant(stranger);
birthDay.addParticipant(participant3);

birthDay.listParticipants();
newYear.listParticipants();

birthDay.findParticipantByEmail("dawid@gmail.com");
newYear.findParticipantByEmail("maksim@gmail.com");

console.log(birthDay);
console.log(newYear);
