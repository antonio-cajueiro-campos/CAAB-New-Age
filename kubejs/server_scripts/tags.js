var log = []

// Mod shortcuts
let MOD = (domain, id, x) => (x ? `${x}x ` : "") + (id.startsWith('#') ? '#' : "") + domain + ":" + id.replace('#', '')
let AE2 = (id, x) => MOD("appliedenergistics2", id, x)		//
let TE = (id, x) => MOD("thermal", id, x)					//
let AP = (id, x) => MOD("architects_palette", id, x)		//
let CR = (id, x) => MOD("create", id, x)					//
let TC = (id, x) => MOD("tconstruct", id, x)
let MC = (id, x) => MOD("minecraft", id, x)					//
let KJ = (id, x) => MOD("kubejs", id, x)					//
let FD = (id, x) => MOD("farmersdelight", id, x)			//
let BOP = (id, x) => MOD("biomesoplenty", id, x)			//
let PR_C = (id, x) => MOD("projectred-core", id, x)         //
let PR_T = (id, x) => MOD("projectred-transmission", id, x) //
let PR_I = (id, x) => MOD("projectred-illumination", id, x) //
let RQ = (id, x) => MOD("xreliquary", id, x)				//
let SD = (id, x) => MOD("storagedrawers", id, x)			//
let SP = (id, x) => MOD("supplementaries", id, x)			//
let F = (id, x) => MOD("forge", id, x)						//
let AC = (id, x) => MOD("aquaculture", id, x)				//
let PP = (id, x) => MOD("prettypipes", id, x)				//
let OC = (id, x) => MOD("occultism", id, x)					//

let colours = ['white', 'orange', 'magenta', 'light_blue', 'lime', 'pink', 'purple', 'light_gray', 'gray', 'cyan', 'brown', 'green', 'blue', 'red', 'black', 'yellow']

ServerEvents.tags('item', event => {

	colours.forEach(element => {
		event.get(F('glazed_terracotta')).add(MC(`${element}_glazed_terracotta`))
	});

	global.trades.forEach(element => {
		event.get('forge:trade_cards').add(`kubejs:trade_card_${element}`)
	});

	global.professions.forEach(element => {
		event.get('forge:profession_cards').add(`kubejs:profession_card_${element}`)
	});

	event.get("farmersdelight:offhand_equipment").add("forbidden_arcanus:obsidian_skull_shield")

	event.get("forge:raw_chicken").add("exoticbirds:raw_birdmeat")
	event.get("forge:tools/axes").add(TC("hand_axe"))
	event.get("forge:vines").add(MC("vine")).add(BOP("willow_vine")).add(BOP("spanish_moss"))
	event.get("forge:recycling")
		.add("extcaves:rusty_pickaxe")
		.add("extcaves:rusty_sword")
		.add("extcaves:iron_dagger")
		.add("extcaves:gourmet_spoon")
		.add("extcaves:gourmet_fork")
		.add("extcaves:chef_knife")
		.add("extcaves:butcher_knife")

	event.get("forge:circuit_press")
		.add(AE2("name_press"))
		.add(AE2("silicon_press"))
		.add(AE2("logic_processor_press"))
		.add(AE2("engineering_processor_press"))
		.add(AE2("calculation_processor_press"))

	event.get("forbidden_arcanus:indestructible_blacklisted")
		.add(/exchangers:.*/)
		.add(/advancedrocketry:.*/)
		.add(/xreliquary:.*/)
		.add(/waterstrainer:.*/)
		.add(OC("#miners/ores"))
		.add(PR_C("draw_plate"))
		.add(PR_C("multimeter"))

	event.get("minecraft:planks").add("forbidden_arcanus:mysterywood_planks").add("forbidden_arcanus:cherrywood_planks")
	event.get("minecraft:logs_that_burn").add("#forbidden_arcanus:mysterywood_logs").add("#forbidden_arcanus:cherrywood_logs")

	event.get('forge:saws').add('cb_microblock:stone_saw').add('cb_microblock:iron_saw').add('cb_microblock:diamond_saw')
	event.get('forge:screwdrivers').add(PR_C('screwdriver'))
	event.get('forge:chromatic_resonators').add(KJ('chromatic_resonator'))
	event.get('forge:flash_drives').add(KJ('flash_drive'))
	event.get('forge:ender_staffs').add(RQ('ender_staff'))
	event.get('forge:cross_of_mercys').add(RQ('mercy_cross'))
	event.get('forge:super_glues').add(CR('super_glue'))
	event.get('forge:wrenches').add(CR('wrench'))
	event.get('forge:tools/wrench').add(CR('wrench'))
	event.get('forge:ingots/steel').add("xkdeco:steel_ingot")
	event.get('forge:storage_blocks/steel').add("xkdeco:steel_block")
	event.get('forge:plates/zinc').add(KJ("zinc_sheet"))

	event.get('thermal:crafting/dies').add('#forge:trade_cards')
	event.get('thermal:crafting/dies').add('#forge:profession_cards')
	event.get('thermal:crafting/casts').add(KJ("three_cast")).add(KJ("eight_cast")).add(KJ("plus_cast")).add(KJ("minus_cast")).add(KJ("multiply_cast")).add(KJ("divide_cast")).add(F("#circuit_press"))

	event.get('create:upright_on_belt')
		.add(AE2("red_paint_ball"))
		.add(AE2("yellow_paint_ball"))
		.add(AE2("green_paint_ball"))
		.add(AE2("blue_paint_ball"))
		.add(AE2("magenta_paint_ball"))
		.add(AE2("black_paint_ball"))

	event.get('randomium:blacklist')
		.add(/.*creative.*/)
		.add(/advancedrocketry.*/)
		.add(/libvulpes.*/)
		.add(/itemfilters.*/)
		.add(/kubejs:failed_alchemy.*/)
		.add(/ftblibrary.*/)
		.add(/projectred-core.*/)
		.add(/waterstrainer.*/)
		.add(/ftbquests.*/)
		.add(/occultism.*/)
		.add(/tconstruct:molten_.*_bucket/)
		.add(/pipez.*/)
		.add(/forbidden_arcanus:edelwood.*/)
		.add(/curios.*/)
		.add(/metalbarrels.*/)
		.add("forbidden_arcanus:arcane_dark_stone")
		.add("#forge:dusts")
		.add("cb_microblock:microblock")
		.add("culinaryconstruct:sandwich")
		.add("culinaryconstruct:food_bowl")
		.add("patchouli:guide_book")
		.add("randomium:randomium")
		.add("portality:generator")
		.add("kubejs:alchemical_laser")
		.add("kubejs:ponder_laser_lamp")
		.add("chiselsandbits:block_bit")
		.add("moreminecarts:chunk_loader")
		.add("moreminecarts:minecart_with_chunk_loader")
		.add("chunknogobyebye:loader")
		.add("grapplemod:repeller")
		.add(CR("handheld_worldshaper"))
		.add("computercraft:computer_command")

	event.get('tconstruct:anvil_metal').add(CR('zinc_block'))

	event.get('chisel:basalt').add('extcaves:lavastone').add('extcaves:polished_lavastone')
	event.get('chisel:limestone').add('extcaves:sedimentstone').add('darkerdepths:limestone').add('darkerdepths:aridrock')

	let stones = ["limestone", "dolomite"]
	stones.forEach(e => {
		event.get(e == "dolomite" ? "chisel:marble" : 'chisel:' + e)
			.add(CR(`${e}`))
			.add(CR(`polished_${e}`))
			.add(CR(`${e}_bricks`))
			.add(CR(`fancy_${e}_bricks`))
			.add(CR(`${e}_pillar`))
			.add(CR(`paved_${e}`))
			.add(CR(`layered_${e}`))
			.add(CR(`chiseled_${e}`))
			.add(CR(`mossy_${e}`))
			.add(CR(`overgrown_${e}`))
	})

	let v_stones = ["andesite", "diorite", "granite"]
	v_stones.forEach(e => {
		event.get('chisel:' + e)
			.add(CR(`${e}_bricks`))
			.add(CR(`fancy_${e}_bricks`))
			.add(CR(`${e}_pillar`))
			.add(CR(`paved_${e}`))
			.add(CR(`layered_${e}`))
			.add(CR(`mossy_${e}`))
			.add(CR(`overgrown_${e}`))
	})

	event.get("forge:treasure1")
		.add(MC('cobweb'))
		.add(MC('dandelion'))
		.add(MC('poppy'))
		.add(MC('jungle_sapling'))
		.add(MC('brown_mushroom'))
		.add(MC('red_mushroom'))
		.add(MC('bamboo'))
		.add(MC('ladder'))
		.add(MC('chain'))
		.add(MC('flower_pot'))
		.add(MC('painting'))
		.add(MC('iron_nugget'))
		.add(MC('gold_nugget'))
		.add(CR('copper_nugget'))
		.add(CR('zinc_nugget'))
		.add(MC('charcoal'))
		.add(MC('rotten_flesh'))
		.add(MC('pumpkin_seeds'))
		.add(MC('melon_seeds'))
		.add(MC('bone_meal'))
		.add(MC('paper'))
		.add(FD('raw_pasta'))
		.add(AP('algal_blend'))
		.add(FD('tree_bark'))
		.add(CR('cogwheel'))
		.add(KJ('sky_slimy_fern_leaf'))
		.add(KJ('earth_slimy_fern_leaf'))
		.add(KJ('ender_slimy_fern_leaf'))
		.add(TE('rubber'))
		.add(TE('phytogro'))
		.add(CR('andesite_alloy'))
		.add(MC('poisonous_potato'))

	event.get("forge:treasure2")
		.add(MC('lantern'))
		.add(MC('redstone'))
		.add(MC('bow'))
		.add(FD('rice'))
		.add(SP('copper_lantern'))
		.add(SP('brass_lantern'))
		.add(SP('sconce'))
		.add(SP('rope_arrow'))
		.add(SP('slingshot'))
		.add(SP('flax_seeds'))
		.add(SP('bomb'))
		.add(FD('sweet_berry_cookie'))
		.add(FD('cabbage_seeds'))
		.add(FD('tomato_seeds'))
		.add(MC('scute'))
		.add(MC('iron_ingot'))
		.add(CR('copper_ingot'))
		.add(CR('zinc_ingot'))
		.add(TE('rosin'))
		.add(MC('spider_eye'))
		.add(MC('nether_brick'))
		.add(MC('beetroot_seeds'))
		.add(MC('book'))
		.add(MC('name_tag'))
		.add(FD('rope'))
		.add(CR('cinder_flour'))
		.add(TC('seared_brick'))
		.add(FD('canvas'))
		.add(TE('cinnabar'))
		.add(TE('sulfur'))
		.add(TE('niter'))
		.add(TE('apatite'))
		.add(MC('compass'))
		.add(MC('experience_bottle'))
		.add(MC('golden_carrot'))
		.add('antiqueatlas:empty_antique_atlas')

	event.get("forge:treasure3")
		.add(MC('skeleton_skull'))
		.add(MC('clock'))
		.add(MC('diamond'))
		.add(MC('lapis_lazuli'))
		.add(MC('zombie_head'))
		.add(CR('rose_quartz'))
		.add(CR('brass_hand'))
		.add(MC('saddle'))
		.add(AE2('certus_quartz_crystal'))
		.add(AE2('fluix_crystal'))
		.add(TE('ice_charge'))
		.add(TE('lightning_charge'))
		.add(TE('earth_charge'))
		.add(PR_C('red_ingot'))
		.add(TE('ruby'))
		.add(TE('sapphire'))
		.add(CR('peculiar_bell'))
		.add(MC('spectral_arrow'))
		.add(MC('gold_ingot'))
		.add(MC('magma_cream'))
		.add(MC('ghast_tear'))
		.add(MC('quartz'))
		.add(MC('prismarine_shard'))
		.add(MC('prismarine_crystals'))
		.add(MC('chorus_fruit'))
		.add(MC('blaze_powder'))
})


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