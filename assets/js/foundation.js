import { Foundation } from 'foundation-sites/js/foundation.core';
import { Reveal } from 'foundation-sites/js/foundation.reveal';
import { MediaQuery } from 'foundation-sites/js/foundation.util.mediaQuery';

Foundation.plugin(Reveal, 'Reveal');

// MediaQuery is oddly needed for the addToJqueryMethod
Foundation.MediaQuery = MediaQuery;
Foundation.addToJquery(jQuery);
jQuery(document).foundation();