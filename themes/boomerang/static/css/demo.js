import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'content-inner': {
    'margin': [{ 'unit': 'string', 'value': 'auto' }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'string', 'value': 'auto' }],
    'padding': [{ 'unit': 'px', 'value': 30 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 30 }, { 'unit': 'px', 'value': 15 }]
  },
  'content-inner example': {
    'marginBottom': [{ 'unit': 'rem', 'value': 5 }]
  },
  'header': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': 'px', 'value': 72 }],
    'color': '#FFFFFF',
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 30 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 2 }],
    'zIndex': '10',
    'display': 'flex',
    'alignItems': 'center',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'background': '#FFF',
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#e9ecef' }],
    '<w1199': {
      'position': 'fixed'
    },
    '<w575': {
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }],
      'paddingRight': [{ 'unit': 'px', 'value': 15 }]
    }
  },
  'header::after': {
    'display': 'block',
    'content': '""',
    'clear': 'both'
  },
  'header body-backdrop': {
    'position': 'absolute'
  },
  'navigation-trigger': {
    'float': 'left',
    'padding': [{ 'unit': 'rem', 'value': 2 }, { 'unit': 'rem', 'value': 2 }, { 'unit': 'rem', 'value': 2 }, { 'unit': 'rem', 'value': 2.4 }],
    'marginLeft': [{ 'unit': 'rem', 'value': -2 }]
  },
  'navigation-trigger:hover': {
    'cursor': 'pointer'
  },
  'navigation-triggertoggled navigation-trigger-inner': {
    'transform': 'rotate(180deg)'
  },
  'navigation-triggertoggled navigation-trigger-inner:before': {
    'transform': 'scale(1)'
  },
  'navigation-triggertoggled navigation-trigger-line:first-child': {
    'width': [{ 'unit': 'px', 'value': 12 }],
    'transform': 'translateX(8px) translateY(1px) rotate(45deg)'
  },
  'navigation-triggertoggled navigation-trigger-line:last-child': {
    'width': [{ 'unit': 'px', 'value': 11 }],
    'transform': 'translateX(8px) translateY(-1px) rotate(-45deg)'
  },
  'navigation-trigger-inner': {
    'width': [{ 'unit': 'px', 'value': 18 }],
    'transition': 'all 300ms'
  },
  'navigation-trigger-line': {
    'width': [{ 'unit': 'px', 'value': 18 }],
    'transition': 'all 300ms'
  },
  'navigation-trigger-inner': {
    'position': 'relative'
  },
  'navigation-trigger-inner:before': {
    'content': '''',
    'position': 'absolute',
    'width': [{ 'unit': 'px', 'value': 40 }],
    'height': [{ 'unit': 'px', 'value': 40 }],
    'left': [{ 'unit': 'px', 'value': -11 }],
    'top': [{ 'unit': 'px', 'value': -14 }],
    'backgroundColor': 'rgba(0, 0, 0, 0.25)',
    'borderRadius': '50%',
    'transition': 'all 300ms',
    'transform': 'scale(0)'
  },
  'navigation-trigger-line': {
    'height': [{ 'unit': 'px', 'value': 2 }],
    'backgroundColor': '#333',
    'display': 'block',
    'position': 'relative'
  },
  'navigation-trigger-line:not(:last-child)': {
    'marginBottom': [{ 'unit': 'px', 'value': 3 }]
  },
  'header-brand>h1': {
    'lineHeight': [{ 'unit': '%V', 'value': 1 }],
    'fontSize': [{ 'unit': 'rem', 'value': 1.3 }],
    'fontWeight': 'normal',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'header-brand>h1>a': {
    'color': '#999'
  },
  'header-nav nav-link': {
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 1 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 1 }],
    'fontSize': [{ 'unit': 'rem', 'value': 0.765625 }],
    'color': '#adb5bd',
    'transition': 'background-color 300ms'
  },
  'header-nav nav-link:hover': {
    'color': '#343a40'
  },
  'sidebar': {
    'width': [{ 'unit': 'px', 'value': 240 }],
    'position': 'fixed',
    'left': [{ 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 1.5 }],
    'height': [{ 'unit': '%V', 'value': 1 }],
    'overflow': 'hidden',
    'zIndex': '1050',
    'backgroundColor': '#fff',
    'borderRight': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#e9ecef' }],
    '<w1199': {
      'transition': 'transform 300ms, opacity 300ms'
    }
  },
  'sidebar-brand': {
    'height': [{ 'unit': 'px', 'value': 72 }],
    'padding': [{ 'unit': 'rem', 'value': 1 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 1 }, { 'unit': 'px', 'value': 0 }]
  },
  'sidebar-brand>h1': {
    'transform': 'translateY(50%)',
    'fontSize': [{ 'unit': 'rem', 'value': 1.09375 }],
    'fontWeight': 'normal',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'sidebar-brand>h1>a': {
    'color': '#343a40'
  },
  'sidebar scrollbar-inner>scroll-element': {
    'marginRight': [{ 'unit': 'px', 'value': 0 }]
  },
  'sidebar--hidden': {
    'backgroundColor': '#FFFFFF',
    'transition': 'transform 300ms, opacity 300ms'
  },
  'sidebar--hidden:not(toggled)': {
    'opacity': '0',
    'transform': 'translate3d(-100%, 0, 0)'
  },
  'sidebar--hiddentoggled': {
    'boxShadow': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'string', 'value': 'rgba(0, 0, 0, 0.08)' }],
    'opacity': '1',
    'transform': 'translate3d(0, 0, 0)'
  },
  'navigation': {
    'listStyle': 'none',
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'paddingBottom': [{ 'unit': 'rem', 'value': 4 }]
  },
  'navigation navigation-title': {
    'color': '#adb5bd',
    'fontWeight': '600',
    'margin': [{ 'unit': 'rem', 'value': 0.875 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'rem', 'value': 1 }, { 'unit': 'rem', 'value': 0 }, { 'unit': 'rem', 'value': 0.875 }, { 'unit': 'rem', 'value': 0 }]
  },
  'navigation navigation-item': {
    'color': '#fff',
    'fontWeight': '500'
  },
  'navigation navigation-link': {
    'display': 'block',
    'padding': [{ 'unit': 'rem', 'value': 0.25 }, { 'unit': 'rem', 'value': 1 }, { 'unit': 'rem', 'value': 0.25 }, { 'unit': 'rem', 'value': 1 }],
    'color': '#495057',
    'fontWeight': '500',
    'WebkitTransition': 'background 0.3s, box-shadow 0.3s',
    'transition': 'background 0.3s, box-shadow 0.3s',
    'borderRadius': '.375rem',
    'textDecoration': 'none'
  },
  'navigation navigation-link:hover': {
    'color': '#288cff'
  },
  'navigation navigation-linkactive': {
    'color': '#288cff'
  },
  'scrollbar-inner': {
    'height': [{ 'unit': '%V', 'value': 1 }]
  },
  'scrollbar-inner>scroll-element': {
    'transition': 'opacity 300ms',
    'marginRight': [{ 'unit': 'px', 'value': 2 }]
  },
  'scrollbar-inner>scroll-elementscroll-y': {
    'width': [{ 'unit': 'px', 'value': 3 }],
    'right': [{ 'unit': 'px', 'value': 0 }]
  },
  'scrollbar-inner>scroll-elementscroll-x': {
    'height': [{ 'unit': 'px', 'value': 3 }],
    'bottom': [{ 'unit': 'px', 'value': 0 }]
  },
  'scrollbar-inner>scroll-element scroll-bar': {
    'transition': 'background-color 300ms'
  },
  'scrollbar-inner>scroll-element scroll-element_track': {
    'transition': 'background-color 300ms'
  },
  'scrollbar-inner>scroll-element scroll-element_track': {
    'backgroundColor': 'transparent'
  },
  'scrollbar-inner:not(:hover) scroll-element': {
    'opacity': '0'
  },
  'page-title': {
    'position': 'relative',
    'paddingBottom': [{ 'unit': 'rem', 'value': 1 }],
    'marginBottom': [{ 'unit': 'rem', 'value': 1 }],
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#e9ecef' }]
  },
  'page-title heading': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'color': '#212529'
  },
  'page-title heading a': {
    'color': '#212529'
  },
  'background-image-holder holder-item': {
    'height': [{ 'unit': '%V', 'value': 1 }],
    'padding': [{ 'unit': 'rem', 'value': 2 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 2 }, { 'unit': 'px', 'value': 0 }],
    '<w991': {
      'height': [{ 'unit': 'string', 'value': 'auto' }],
      'padding': [{ 'unit': 'rem', 'value': 4 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 4 }, { 'unit': 'px', 'value': 0 }]
    }
  },
  'background-image-holder swiper-container': {
    'position': 'relative',
    'height': [{ 'unit': '%V', 'value': 1 }]
  },
  'background-image-holder container': {
    'position': 'relative',
    'height': [{ 'unit': '%V', 'value': 1 }]
  },
  'background-image-holder swiper-container swiper-slide animated': {
    'opacity': '0'
  },
  'background-image-holder swiper-container swiper-slide animatedanimation-ended': {
    'opacity': '1'
  },
  'bg-cover': {
    'position': 'relative'
  },
  'bg-size--cover': {
    'backgroundSize': 'cover',
    'backgroundRepeat': 'no-repeat'
  },
  'bg-size--contain': {
    'backgroundSize': 'contain',
    'backgroundRepeat': 'no-repeat'
  },
  'typeface-palette typeface-entry': {
    'position': 'relative',
    'display': 'block',
    'padding': [{ 'unit': 'rem', 'value': 2 }, { 'unit': 'rem', 'value': 2 }, { 'unit': 'rem', 'value': 2 }, { 'unit': 'rem', 'value': 2 }],
    'background': '#fff',
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': 'rgba(0, 0, 0, 0.05)' }],
    'borderRadius': '.375rem'
  },
  'typeface-badge': {
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 10 }],
    'right': [{ 'unit': 'px', 'value': 10 }]
  },
  'color-palette color-entry': {
    'position': 'relative',
    'display': 'block',
    'height': [{ 'unit': 'px', 'value': 170 }],
    'color': '#FFF',
    'borderRadius': '.375rem'
  },
  'color-palette color-entry color-code': {
    'background': '#fff',
    'color': '#495057',
    'padding': [{ 'unit': 'px', 'value': 6 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 6 }, { 'unit': 'px', 'value': 10 }],
    'position': 'absolute',
    'bottom': [{ 'unit': 'px', 'value': 12 }],
    'right': [{ 'unit': 'px', 'value': 12 }]
  },
  'content-docs h2[id]::before': {
    'content': '""',
    'display': 'block',
    'height': [{ 'unit': 'rem', 'value': 3 }],
    'marginTop': [{ 'unit': 'rem', 'value': -3 }]
  },
  'content-docs h3[id]::before': {
    'content': '""',
    'display': 'block',
    'height': [{ 'unit': 'rem', 'value': 3 }],
    'marginTop': [{ 'unit': 'rem', 'value': -3 }]
  },
  'content-docs h4[id]::before': {
    'content': '""',
    'display': 'block',
    'height': [{ 'unit': 'rem', 'value': 3 }],
    'marginTop': [{ 'unit': 'rem', 'value': -3 }]
  },
  'content-docs h2[id]:not(:first-child)': {
    'marginTop': [{ 'unit': 'rem', 'value': 5 }]
  },
  'content-docs h3[id]:not(:first-child)': {
    'marginTop': [{ 'unit': 'rem', 'value': 5 }]
  },
  'content-docs h4[id]:not(:first-child)': {
    'marginTop': [{ 'unit': 'rem', 'value': 5 }]
  },
  'content-docs h2[id]': {
    'marginBottom': [{ 'unit': 'rem', 'value': 2 }]
  },
  'content-docs h3[id]': {
    'marginBottom': [{ 'unit': 'rem', 'value': 2 }]
  },
  'content-docs h4[id]': {
    'marginBottom': [{ 'unit': 'rem', 'value': 2 }]
  },
  'highlight pre': {
    'padding': [{ 'unit': 'rem', 'value': 1.5 }, { 'unit': 'rem', 'value': 1.5 }, { 'unit': 'rem', 'value': 1.5 }, { 'unit': 'rem', 'value': 1.5 }],
    'background': '#f8f9fa',
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#dee2e6' }],
    'borderRadius': '.375rem'
  },
  'code-example': {
    'margin': [{ 'unit': 'rem', 'value': 2 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 2 }, { 'unit': 'px', 'value': 0 }]
  },
  'code-clipboard': {
    'position': 'relative'
  },
  'btn-clipboard': {
    'position': 'absolute',
    'top': [{ 'unit': 'rem', 'value': 0.5 }],
    'right': [{ 'unit': 'rem', 'value': 0.5 }],
    'zIndex': '10',
    'display': 'block',
    'padding': [{ 'unit': 'rem', 'value': 0.25 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 0.25 }, { 'unit': 'rem', 'value': 0.5 }],
    'fontSize': [{ 'unit': '%V', 'value': 0.75 }],
    'color': '#818a91',
    'cursor': 'pointer',
    'backgroundColor': 'transparent',
    'border': [{ 'unit': 'px', 'value': 0 }],
    'borderRadius': '.25rem'
  },
  'btn-clipboard:hover': {
    'color': '#fff',
    'backgroundColor': '#027de7'
  },
  'toc-entry': {
    'display': 'block'
  },
  'toc-entry a': {
    'display': 'block',
    'padding': [{ 'unit': 'rem', 'value': 0.125 }, { 'unit': 'rem', 'value': 1.5 }, { 'unit': 'rem', 'value': 0.125 }, { 'unit': 'rem', 'value': 1.5 }],
    'color': '#99979c'
  },
  'toc-entry a:hover': {
    'color': '#007bff',
    'textDecoration': 'none'
  }
});
