$(document).ready(function() {

	var percent = 1;
	$('body').loadie();
	$('body').loadie(percent);

	// DATABASE OF SHOWS
	var shows = {
		pokemon: {
			tvShow: 'Pokemon',
			description: 'After he turns 10 years old, Ash Ketchum is allowed to start his journey in the world of Pokémon and dreams of becoming a Pokémon master. Along the way, Ash makes many human and Pokémon friends as he works his way through the ranks of the world\'s many Pokémon Leagues.',
			genre: 'kids',
			relatedShows: [
				{
					tvShow: 'Digimon',
					genre: 'kids',
					image: "http://i0.kym-cdn.com/entries/icons/original/000/016/413/Digimon-Frontier-Episode-50-English-Dubbed.jpg",
					link: "https://en.wikipedia.org/wiki/Digimon_Adventure"
				},
				{
					tvShow: 'One Piece',
					genre: 'kids',
					image: "https://i.kinja-img.com/gawker-media/image/upload/s--gx6McVNS--/jttypmbsow8caeyo23pa.jpg",
					link: "https://en.wikipedia.org/wiki/One_Piece"
				},
				{
					tvShow: 'Case Closed',
					genre: 'kids',
					image: "http://images2.itechpost.com/data/images/full/24726/detective-conan-to-air-a-2-hour-special-remake-of-first-episode-reveals-more-details-about-shinichis-transformation.jpg",
					link: "https://en.wikipedia.org/wiki/Case_Closed"
				},
				{
					tvShow: 'Yu-Gi-Oh',
					genre: 'kids',
					image: "http://vignette4.wikia.nocookie.net/shipping/images/5/5c/Yu-Gi-Oh-the-anime.png/revision/latest?cb=20151117074808",
					link: "https://en.wikipedia.org/wiki/Yu-Gi-Oh!#Anime"
				},
				{
					tvShow: 'Beyblade',
					genre: 'kids',
					image: "http://2.bp.blogspot.com/-DXiAg_4CJbU/UvWyvZSva2I/AAAAAAAAAc0/8MxlVdFcVSQ/s1600/beyblade-g-revolution.jpg",
					link: "https://en.wikipedia.org/wiki/Beyblade#Anime"
				}
			]
		},
		dbz: {
			tvShow: 'Dragon Ball Z',
			description: 'Dragon Ball Z follows the adventures of the protagonist Goku who, along with his companions, defends the Earth against an assortment of villains ranging from intergalactic space fighters and conquerors, unnaturally powerful androids and nearly indestructible creatures.',
			genre: 'shounen',
		    relatedShows: [
		        {
		            tvShow:'Naruto',
		            genre:'shounen',
		            image: "https://ibhuluimcom-a.akamaihd.net/ib.huluim.com/show/1304?region=US&size=952x536",
		            link: "https://en.wikipedia.org/wiki/Naruto"
		        },
		        {
		            tvShow:'One Punch Man',
		            genre:'shounen',
		            image: "https://i.ytimg.com/vi/zrfUJzfMZ_4/maxresdefault.jpg",
		            link: "https://en.wikipedia.org/wiki/One-Punch_Man"
		        },
		        {
		            tvShow:'Full Metal Alchemist',
		            genre:'shounen',
		            image: "http://media.comicbook.com/2016/03/fullmetal-alchemist-176454.jpg",
		            link: "https://en.wikipedia.org/wiki/Fullmetal_Alchemist"
		        },
		        {
		            tvShow:'My Hero Academia',
		            genre: 'shounen',
		            image: "http://vignette4.wikia.nocookie.net/bokunoheroacademia/images/b/b1/MHA_kabegami_A.png/revision/latest?cb=20160413110247",
		            link: "https://en.wikipedia.org/wiki/My_Hero_Academia"
		        },
		        {
		            tvShow:'Hunter x Hunter',
		            genre:'shounen',
		            image: "http://media.comicbook.com/2017/01/hunter-x-hunter-227815.png",
		            link: "https://en.wikipedia.org/wiki/Hunter_%C3%97_Hunter"
		        }
		    ]
		},
		sailor: {
			tvshow: 'Sailor Moon',
			description: 'A 14-year-old young schoolgirl named Serena meets a talking cat named Luna. Luna gives Serena the ability to transform into her magical alter ego — Sailor Moon — tasked with locating the moon princess and battling the evil forces of the Dark Kingdom.',
			genre: 'shoujo',
			relatedShows: [
				{
					tvShow: 'Inuyasha',
					genre: 'shoujo',
					image: "https://s-media-cache-ak0.pinimg.com/originals/ca/79/d3/ca79d3bc9696a0cb36b03be6f03e52c2.jpg",
					link: "https://en.wikipedia.org/wiki/Inuyasha"
				},
				{
					tvShow: 'Cardcaptor Sakura',
					genre: 'shoujo',
					image: "http://i1162.photobucket.com/albums/q539/amongbobbinsandthread/ccs/reddress_zpsk2avornu.jpg",
					link: "https://en.wikipedia.org/wiki/Cardcaptor_Sakura"
				},
				{
					tvShow: 'Revolutionary Girl Utena',
					genre: 'shoujo',
					image: "https://images3.alphacoders.com/228/228379.jpg",
					link: "https://en.wikipedia.org/wiki/Revolutionary_Girl_Utena"
				},
				{
					tvShow: 'Fruits Basket',
					genre: 'shoujo',
					image: "https://s-media-cache-ak0.pinimg.com/originals/e1/c1/c0/e1c1c0b5d168040ac2f7bcd664a05a38.jpg",
					link: "https://en.wikipedia.org/wiki/Fruits_Basket"
				},
				{
					tvShow: 'Magic Knight Rayearth',
					genre: 'shoujo',
					image: "https://animeguyspl0x.files.wordpress.com/2012/02/mkr-15.jpg",
					link: "https://en.wikipedia.org/wiki/Magic_Knight_Rayearth"
				}
			]
		},
		titan: {
			tvShow: 'Attack on Titan',
			description: 'The story revolves around the adventures of Eren Yeager, his foster sister, Mikasa Ackerman, and their childhood friend Armin Arlert. After the wall which protects their hometown of Shinganshina is breached by the Colossal Titan leading the other Titans to enter, Eren watches in horror as one of them eats his mother. Vowing to kill all the Titans, Eren enlists in the military, along with his friends.',
			genre: 'dark',
			relatedShows: [
				{
					tvShow: 'Future Diary',
					genre: 'dark',
					image: "https://i.ytimg.com/vi/oUQH72tokg4/maxresdefault.jpg",
					link: "https://en.wikipedia.org/wiki/Future_Diary"
				},
				{
					tvShow: 'Death Note',
					genre: 'dark',
					image: 'https://s-media-cache-ak0.pinimg.com/originals/5e/15/13/5e1513080d6a2850d1d40d9100fcf060.jpg',
					link: "https://en.wikipedia.org/wiki/Death_Note"
				},
				{
					tvShow: 'Berserk',
					genre: 'dark',
					image: "http://vignette2.wikia.nocookie.net/berserk/images/d/d9/MainPagePart1.jpg/revision/latest/scale-to-width-down/670?cb=20160709045543",
					link: "https://en.wikipedia.org/wiki/Berserk_(2016_TV_series)"
				},
				{
					tvShow: 'Parasyte',
					genre: 'dark',
					image: "http://img03.deviantart.net/a049/i/2015/015/d/4/parasyte_background_by_jomzypuff-d8e37r2.png",
					link: "https://en.wikipedia.org/wiki/Parasyte"
				},
				{
					tvShow: 'Vampire Hunter D',
					genre: 'dark',
					image: "http://static.comicvine.com/uploads/original/12/123441/2932997-tumblr_me4kx3z4pi1rk3gn4o1_1280.png",
					link: "https://en.wikipedia.org/wiki/Vampire_Hunter_D"
				}
			]
		},
		gundam: {
			tvShow: 'Mobile Suit Gundam Wing',
		    description: 'It is the year After Colony 195, and war between the Space Colonies and Earth has begun. To give the colonies an edge, they send 5 young soldiers, trained to perfection, to earth in the most powerful of Mobile Suits-Gundams. With their arrival, the tide of the war changes as they battle against the Earth forces and the Colonies of their origin.',
		    genre: 'mecha',
		    relatedShows: [
		        {
		            tvShow:"Neon Genesis Evangelion",
		            genre:"mecha",
		            image: "http://www.pageofreviews.com/wp-content/uploads/Neon_Genesis_Evangelion.jpg",
		            link: "https://en.wikipedia.org/wiki/Neon_Genesis_Evangelion"
		        },
		        {
		            tvShow:"Eureka Seven",
		            genre:"mecha",
		            image: "https://d1m6vmmwsgiy3l.cloudfront.net/wallpapers/eureka_seven_205_1280.jpg",
		            link: "https://en.wikipedia.org/wiki/Eureka_Seven"
		        },
		        {
		            tvShow:"Teagen Toppa Gurren Lagann",
		            genre:"mecha",
		            image: "http://www.saywhatnowproductions.com/wp-content/uploads/2013/06/tengen-toppa-gurren-lagann-wallpapers-4.png",
		            link: "https://en.wikipedia.org/wiki/Gurren_Lagann"
		        },
		        {
		            tvShow:"Code Geass",
		            genre:"mecha",
		            image: "https://s-media-cache-ak0.pinimg.com/originals/10/20/57/102057dda53a0f6d36c1717683acb7d1.jpg",
		            link: "https://en.wikipedia.org/wiki/Code_Geass"
		        },
		        {
		            tvShow:"The Vision of Escaflowne",
		            genre:"mecha",
		            image: "https://i.ytimg.com/vi/TOb9XRU0kpA/hqdefault.jpg",
		            link: "https://en.wikipedia.org/wiki/The_Vision_of_Escaflowne"
		        }
		    ]
		}
	}


	// stores user's input into a variable
	
	
	// finds the input value in the 'shows' object and stores into a variable
	

	


	// When user clicks on an input
	$('input[type=radio]').on('change', function(e) {

		$('input[type=radio]').parent('div').removeClass('active');

		$(this).parent('div').addClass('active');

		var input = $(this).val();

		var showChoice = shows[input];

		var related = showChoice.relatedShows;

		// prints out the description of the show
		$('.summary').html(`<p>${showChoice.description}</p>`);


		// input[type=radio]:checked ~ .animeContent

		$('.popupContainer').css('position', 'fixed').css('transform', 'translate(-50%, -50%)').css('display', 'block');

		
		$('form').on('submit', function(e) {
			e.preventDefault();

		// go into "shows", find relatedShows under specific tvShow
			var randomShow = related[Math.floor(Math.random()*related.length)];

			$('.animeContent').css('display','none');
			
			$('.randomContainer').html(`<h2 class="center">${randomShow.tvShow}</h2>
				<img src="${randomShow.image}">
				<a href="${randomShow.link}" class="learnMore">Learn More</a>`)
				.addClass('opacity');

			$('.pick').css('display', 'none');

			$('.popupContainer').css('position', 'static').css('transform', 'translate(0)').addClass('popupColor');

			$('input[type="submit"]').css('border', '2px solid #0085AA').hover(function() {
				$(this).css('color', '#25C9F7');
			}, function() {
				$(this).css('color', '#F78C25');
			});

			$('.summary').empty();

		});	
	});

	$('input[value="Start Over"]').on('click', function(e) {
		e.preventDefault();
		$('input[type=radio]').prop('checked', false);
		$('.animeContent').css('display', 'flex').removeClass('active');
		$('.randomContainer').empty().removeClass('opacity');
		$('.pick').css('display', 'block');
		$('.popupContainer').css('display', 'none').removeClass('popupColor');
	});

});