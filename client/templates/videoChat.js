import SinchClient from 'sinch-rtc';

Template.videoChat.onRendered({

  // const template = this;
  //
  // sinchClient = new SinchClient({
  //   applicationKey: Meteor.settings.public.SINCH_KEY,
  //   capabilities: {calling: true, video: true},
  //   supportActiveConnection: true,
  //   onLogMessage: function(message) {
  //       console.log(message.message);
  //   },
  // });
});

Template.videoChat.helpers({

});

Template.name.events({

  "click #anwser-chat": function(event, template){

  },
  "submit #start-chat": function(event, template){
    // event.preventDefault();
    // let roomName = event.target.room-name.value;

  },
  "click #stop-chat": function(event, template){

  }
});
