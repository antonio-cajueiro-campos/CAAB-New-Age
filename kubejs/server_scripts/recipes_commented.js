// Scripts 

function tweaks(event) {
	//event.remove({ id: "buddycards:fd/buddysteel_food_knife" })
	//event.shaped("buddycards:buddysteel_food_knife", ['S ', ' M'], { M: "buddycards:buddysteel_ingot", S: F('#rods/wooden') })
	//bedrock_cobblegen(AP("chiseled_packed_ice"), CR("diorite_cobblestone"))
	//event.remove({ id: "chisel:charcoal/raw" })
	//event.stonecutting("chisel:charcoal/raw", MC('charcoal'))
}

function unify(event) {

	// event.recipes.createSplashing([Item.of(MC('clay_ball'), 1).withChance(0.25).toResultJson()], 'biomesoplenty:black_sand')
	// event.recipes.createSplashing([Item.of(MC('clay_ball'), 1).withChance(0.25).toResultJson()], 'biomesoplenty:white_sand')
	// event.recipes.createSplashing([Item.of(MC('clay_ball'), 1).withChance(0.25).toResultJson()], 'biomesoplenty:orange_sand')
}

function oreProcessing(event) {
	//event.recipes.createCrushing([Item.of("buddycards:luminis_crystal", 2), Item.of("buddycards:luminis_crystal", 1).withChance(.25), stone], "buddycards:luminis_ore")

	//event.recipes.createMilling(['3x ' + MC('glowstone_dust')], 'buddycards:luminis_crystal').processingTime(700)
	//event.recipes.createCrushing(['6x ' + MC('glowstone_dust')], 'buddycards:luminis_crystal').processingTime(500)
	//event.recipes.thermal.pulverizer(['9x ' + MC('glowstone_dust')], 'buddycards:luminis_crystal').energy(10000)
}

function copperMachine(event) {

	// let t = KJ('incomplete_sealed_mechanism')
	// event.recipes.createSequencedAssembly([
	// 	KJ('sealed_mechanism'),
	// ], KJ('kinetic_mechanism'), [
	// 	event.recipes.createDeploying(t, [t, TE('cured_rubber')]),
	// 	event.recipes.createDeploying(t, [t, TE('cured_rubber')]),
	// 	event.recipes.createDeploying(t, [t, F('#super_glues')])
	// ]).transitionalItem(t)
	// 	.loops(1)
	// 	.id('kubejs:sealed_mechanism')
}

function zincMachine(event) {
	// event.custom({
	// 	"type": "tconstruct:casting_basin",
	// 	"cast": {
	// 		"item": "minecraft:basalt"
	// 	},
	// 	"cast_consumed": true,
	// 	"fluid": {
	// 		"name": "minecraft:lava",
	// 		"amount": 1000
	// 	},
	// 	"result": Item.of(TE("basalz_rod"), 2),
	// 	"cooling_time": 15
	// })

	// event.remove({ id: TE('basalz_powder') })
	// event.remove({ id: TC('smeltery/casting/scorched/stone_from_magma') })
	// event.remove({ id: TC('smeltery/scorched/scorched_brick_kiln') })
	// event.remove({ id: TC('smeltery/scorched/scorched_brick') })
	// event.remove({ id: TC('smeltery/melting/scorched/grout') })
	// event.recipes.createMilling([Item.of(TE('basalz_powder'), 1)], TE("basalz_rod")).processingTime(300)
}

function invarMachine(event) {
	// invar_machine(TE('machine_crucible'), 1, MC('nether_bricks'))
	// invar_machine(TE('machine_furnace'), 1, MC('bricks'))
	// invar_machine(TE('machine_chiller'), 1, MC('packed_ice'))
	// invar_machine(TE('machine_pyrolyzer'), 1, MC('blaze_rod'))
	// invar_machine(TE('machine_bottler'), 1, MC('bucket'))
	// invar_machine(TE('machine_centrifuge'), 1, MC('compass'))
	// invar_machine(TE('machine_refinery'), 1, '#forge:glass')
	// invar_machine(TE('machine_pulverizer'), 1, MC('flint'))
	// invar_machine(TE('machine_smelter'), 1, MC('blast_furnace'))
	// invar_machine(TE('machine_sawmill'), 1, TE('saw_blade'))
	// invar_machine(TE('machine_brewer'), 1, MC('brewing_stand'))
	// invar_machine(TE('machine_insolator'), 1, MC('dirt'))
}

function enderMachine(event) {
	// event.remove({ id: TE("machine/crucible/crucible_ender_pearl") })
	// event.recipes.createMixing(Fluid.of(TE("ender"), 576), [Fluid.of('tconstruct:molten_silver', 144), Fluid.of('tconstruct:ender_slime', 1000)]).heated()

	// event.custom({
	// 	"type": "tconstruct:casting_table",
	// 	"cast": { "tag": "tconstruct:casts/multi_use/ingot" },
	// 	"fluid": {
	// 		"name": "thermal:ender",
	// 		"amount": 144
	// 	},
	// 	"result": { "item": TE("enderium_ingot") },
	// 	"cooling_time": 50
	// })

	// event.custom({
	// 	"type": "tconstruct:casting_table",
	// 	"cast": { "tag": "tconstruct:casts/single_use/ingot" },
	// 	"cast_consumed": true,
	// 	"fluid": {
	// 		"name": "thermal:ender",
	// 		"amount": 144
	// 	},
	// 	"result": { "item": TE("enderium_ingot") },
	// 	"cooling_time": 50
	// })

	// event.custom({
	// 	"type": "tconstruct:casting_table",
	// 	"cast": { "tag": "tconstruct:casts/multi_use/gear" },
	// 	"fluid": {
	// 		"name": TE("ender"),
	// 		"amount": 576
	// 	},
	// 	"result": { "item": TE("enderium_gear") },
	// 	"cooling_time": 114
	// })

	// event.custom({
	// 	"type": "tconstruct:casting_table",
	// 	"cast": { "tag": "tconstruct:casts/single_use/gear" },
	// 	"cast_consumed": true,
	// 	"fluid": {
	// 		"name": TE("ender"),
	// 		"amount": 576
	// 	},
	// 	"result": { "item": TE("enderium_gear") },
	// 	"cooling_time": 114
	// })

	// let t = KJ('incomplete_abstruse_mechanism')
	// event.recipes.createSequencedAssembly([
	// 	KJ('abstruse_mechanism'),
	// ], KJ('inductive_mechanism'), [
	// 	event.recipes.createDeploying(t, [t, TE('enderium_gear')]),
	// 	event.recipes.createDeploying(t, [t, TE('enderium_gear')]),
	// 	event.recipes.createDeploying(t, [t, F('#ender_staffs')])
	// ]).transitionalItem(t)
	// 	.loops(1)
	// 	.id('kubejs:abstruse_mechanism')
}

function alchemy(event) {
	// event.recipes.thermal.chiller(KJ("creosote_pellet"), [Fluid.of(TE("creosote"), 50)]).energy(1000)
	// event.recipes.thermal.crucible(Fluid.of(KJ("liquid_smoke"), 250), KJ("creosote_pellet")).energy(3000)
	// event.remove({ id: TE("blitz_powder") })
	// event.recipes.createPressing(TE("lightning_charge"), TE("blitz_powder"))
	
	// event.recipes.createCompacting(KJ("smoke_mote"), [Fluid.of(KJ("liquid_smoke"), 500)])

	// event.remove({ output: "desolation:activatedcharcoal" })
	// event.recipes.thermal.smelter(
	// 	["desolation:activatedcharcoal"],
	// 	[KJ("coke_chunk"), TE("lightning_charge")])
	// 	.energy(10000)
}