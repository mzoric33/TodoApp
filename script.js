"use strict";

function todoAppViewModel() {
  const that = this;

  const list = document.querySelector(".list");

  //that.hasBeenSubmitted = ko.observable(false);

  that.tasks = ko.observableArray([]);

  that.task = ko.observable("...").extend({
    required: true,
  });

  that.urgency = ko.observable("dolater");

  that.handleSubmit = function () {
    const errors = ko.validation.group(that);
    if (errors().length > 0) {
      errors.showAllMessages();
      return;
    }

    if (that.urgency() === "dolater") {
      list.classList.add("green");
    }
    if (that.urgency() === "optional") {
      list.classList.add("orange");
    }
    if (that.urgency() === "urgent") {
      list.classList.add("red");
    }

    that.tasks.push(that.task());
    that.task("...");
    that.urgency("dolater");
  };

  that.removeTask = function (_, event) {
    const indexToRemove = event.target.getAttribute("task-index");
    that.tasks.splice(indexToRemove, 1);
  };
}

const knockoutApp = document.querySelector("#knockout-app");
ko.applyBindings(new todoAppViewModel(), knockoutApp);
