// priority: 0

// settings.logAddedRecipes = true
// settings.logRemovedRecipes = true
// settings.logSkippedRecipes = false
// settings.logErroringRecipes = true

var seed
var log = []

// Program 

PlayerEvents.chat(event => {
	// Check if message equals creeper, ignoring case

	if (event.message.startsWith('!clear')) {
		event.player.tell('Log cleared')
		log = []
		event.cancel()
	}

	if (event.message.startsWith('!status')) {
		if (log.length == 0) {
			event.player.tell('Log empty')
			event.cancel()
			return
		}

		event.player.tell('Log Start >')
		log.forEach(s => event.player.tell(s))
		event.player.tell('<')
		event.cancel()
	}
})