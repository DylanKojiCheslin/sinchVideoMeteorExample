import SinchClient from 'sinch-rtc';

function afterStartSinchClient(){
  //hide signup/login section
  template.set("userIsLoggedIn", true);
};

Template.videoChat.onCreated(function(){
  //user is logged in
  this.userIsLoggedIn = new ReactiveVar(false);

  // The video call was succesful, the peers are connected.
  this.isConnected = new ReactiveVar(false);

  // A call is processing, but not yet completed.
  this.isCalling = new ReactiveVar(false);

});


Template.videoChat.onRendered({
  function(){
    let sinchClient = new SinchClient({
      applicationKey: Meteor.settings.public.SINCH_KEY,
      capabilities: {calling: true, video: true},
      supportActiveConnection: true,
      onLogMessage: function(message) {
          console.log(message.message);
      },
    })
  }
});

Template.videoChat.helpers({
  isLoggedIn: function(){
    return Template.instance().userIsLoggedIn.get();
  },
});

Template.name.events({

  "submit #sign-up": function(event, template){
    let userSignUp;
      userSignUp.username =  event.target.userName.value;
      userSignUp.password = event.target.userPassword.value;

      sinchClient.newUser(userSignUp, function(ticket) {
        sinchClient.start(ticket, afterStartSinchClient());
    });
  },
  "click #anwser-chat": function(event, template){

  },
  "submit #start-chat": function(event, template){
    // event.preventDefault();
    // let roomName = event.target.room-name.value;

  },
  "click #stop-chat": function(event, template){

  }
});
