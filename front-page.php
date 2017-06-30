<?php
/**
 * The front-page.php template file.
 *
 * Learn more: http://codex.wordpress.org/Template_Hierarchy
 *
 * @package Heisenberg
 */

get_header(); ?>
    <p><button class="button" data-open="exampleModal1">Click me for a modal</button></p>
    <div class="reveal" id="exampleModal1" data-reveal>
        <h1>Awesome. I Have It.</h1>
        <p class="lead">Your couch. It is mine.</p>
        <p>I'm a cool paragraph that lives inside of an even cooler modal. Wins!</p>
        <button class="close-button" data-close aria-label="Close modal" type="button">
            <span aria-hidden="true">&times;</span>
        </button>
    </div>

<div class="row">

	<div class="medium-8 columns">

		<div id="primary" class="content-area">

			<main id="main" class="site-main" role="main">
			<?php
			if ( have_posts() ) :

				while ( have_posts() ) :

					the_post();

					get_template_part( 'template-parts/content', get_post_format() );

				endwhile;

				the_posts_navigation();

			else :

				get_template_part( 'template-parts/content', 'none' );

			endif; ?>

			</main>

		</div>

	</div>

	<div class="medium-4 columns">

		<?php get_sidebar(); ?>

	</div>

</div>

<?php
get_footer();
