"use strict";

function todoAppViewModel() {
  const that = this;

  //that.hasBeenSubmitted = ko.observable(false);

  that.tasks = ko.observableArray([]);

  that.task = ko.observable("").extend({
    required: true,
  });

  that.urgency = ko.observable("dolater");

  that.handleSubmit = function () {
    const errors = ko.validation.group(that);
    if (errors().length > 0) {
      errors.showAllMessages();
      return;
    }
    that.tasks.push(that.task());
  };
}

const knockoutApp = document.querySelector("#knockout-app");
ko.applyBindings(new todoAppViewModel(), knockoutApp);
