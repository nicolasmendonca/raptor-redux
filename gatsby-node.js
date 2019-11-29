const path = require(`path`);

exports.createPages = async ({ actions: { createRedirect } }) => {
	createRedirect({
		fromPath: '/',
		isPermanent: true,
		redirectInBrowser: true,
		toPath: '/raptor-redux'
  })
}
