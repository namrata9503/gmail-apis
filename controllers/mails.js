const Mail = require('../models/mail');

exports.postNewMail = (req, res) => {
  let{
    receiver,
    cc,
    bcc,
    subject,
    message,
    createdAt
  } = req.body;

  var mail = new Mail({
    receiver,
    cc,
    bcc,
    subject,
    message,
    createdAt
  });
  mail.save().then((mail) => {
    console.log('Added successfully');
    res.json(mail);
  })
};

exports.getAllMail = (req, res) => {
  Mail.find({}, (error, mails) => {
    if (error) {
      res.json({
        message: "Server error, Please try after some time.",
        status: 500
      });
    }
    if (mails) {
      res.json({
        data: mails,
        message: "All mails fetched",
        status: 200
      });
    } else {
      res.json({
        message: "No data found",
        status: 200
      });
    }
  });
};

exports.getMailById = (req, res) => {
  Mail.findById(req.params.id, (err, mails) => {
    if (err) {
      res.json({
        message: "Server error, Please try after some time.",
        status: 500
      });
    }
    if (mails) {
      res.json({
        data: mails,
        message: "Mail data fetched successfully",
        status: 200
      });
    } else {
      res.json({
        message: "No data found",
        status: 200
      });
    }
  });
};

exports.updateMailById = (req, res) => {
  console.log(req.body);
  const {
    receiver,
    cc,
    bcc,
    subject,
    message,
    createdAt
  } = req.body;
  Mail.update({
    _id: req.params.id
  }, {
    receiver,
    cc,
    bcc,
    subject,
    message,
    createdAt
  }, {}, (error, mail) => {
    if (error)
      res.json({
        error: error,
        status: 500
      });
    console.log(error);
    res.json(mail);
  });
};

exports.deleteMailById = (req, res) => {
  Mail.findOneAndDelete({
    _id: req.params.id
  }, (error, deleteId) => {
    if (error)
      res.json({
        error: error,
        status: 500
      });
    res.json({
      message: "Deleted successfully"
    });
  });
};