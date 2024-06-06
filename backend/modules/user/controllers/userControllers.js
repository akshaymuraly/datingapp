const home = (req, res) => {
  res.render("home.hbs");
};

const about = (req, res) => {
  res.render("about.hbs");
};

const contact = (req, res) => {
  res.render("contact.hbs");
};

module.exports = {
  home,
  about,
  contact,
};
