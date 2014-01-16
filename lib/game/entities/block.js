ig.module(
	'game.entities.block'
)
.requires(
	'impact.entity'
)
.defines(function(){


// Block
EntityBlock = ig.Entity.extend({
	size: {x:32, y:32},
	animSheet: new ig.AnimationSheet( 'media/tetris_block.png', 32, 32 ),
	type: ig.Entity.TYPE.B,
	
	init: function( x, y, settings ) {
		this.addAnim( 'idle', 0.1, [0] );		
		this.parent( x, y, settings );
	},
	
	update: function() {
		this.parent();
	},
	
});

});