import * as faker from 'faker';

export const columns = [
  {
    field: 'id',
    headerName: 'id',
    type: 'int',
    hide: true,
    wrapper: '',
    isHiddenTotal: true,
    headerTooltip: ''
  },
  {
    field: 'name2',
    headerName: 'Property Name',
    type: 'string',
    hide: false,
    wrapper: '',
    isHiddenTotal: true,
    headerTooltip: '',
    pinned: 'left',
    headerCheckboxSelection: true,
    headerCheckboxSelectionFilteredOnly: true,
    checkboxSelection: true
  },
  {
    field: 'pid',
    headerName: 'Partner Reference',
    type: 'string',
    hide: false,
    wrapper: '',
    isHiddenTotal: true,
    headerTooltip: '',
    pinned: 'left'
  },
  {
    field: 'pos2',
    headerName: 'Point of Sale',
    type: 'string',
    hide: false,
    wrapper: '',
    isHiddenTotal: true,
    headerTooltip: ''
  },
  {
    field: 'hotel_impressions2',
    headerName: 'Property Impressions',
    type: 'int',
    hide: false,
    wrapper: '',
    isHiddenTotal: false,
    headerTooltip:
      'Property Impressions indicates the number of impressions received for a specific property. An impression is recorded for all properties on a search results page when a user makes at least one click on any property displayed.'
  },
  {
    field: 'clicks2',
    headerName: 'Clicks',
    type: 'int',
    hide: false,
    wrapper: '',
    isHiddenTotal: false,
    headerTooltip:
      'Clicks indicates the number of clicks as counted by trivago.'
  },
  {
    field: 'cost2',
    headerName: 'Cost',
    type: 'float',
    hide: false,
    wrapper: '€',
    isHiddenTotal: false,
    headerTooltip: 'Cost indicates the total CPC cost.'
  },
  {
    field: 'avg_cpc2',
    headerName: 'Average CPC',
    type: 'float',
    hide: false,
    wrapper: '€',
    isHiddenTotal: false,
    headerTooltip:
      'The Average Cost-Per-Click indicates the average amount you have been charged for a click.'
  },
  {
    field: 'top_pos_share2',
    headerName: 'Top Position Share',
    type: 'float',
    hide: false,
    wrapper: '%',
    isHiddenTotal: false,
    headerTooltip:
      'Top Position Share indicates the percentage of all impressions the property received for which your offer was in the top position.'
  },
  {
    field: 'impressions_share2',
    headerName: 'Impression Share',
    type: 'float',
    hide: false,
    wrapper: '%',
    isHiddenTotal: false,
    headerTooltip:
      'Your Impression Share indicates the percentage of impressions you received out of the total number of hotel impressions. An impression is recorded for every advertiser that provides a rate via an API region request.'
  },
  {
    field: 'outbid_rate2',
    headerName: 'Outbid Ratio',
    type: 'float',
    hide: false,
    wrapper: '%',
    isHiddenTotal: false,
    headerTooltip:
      'Your Outbid Ratio indicates the reduced exposure of your rates from all potential impressions in the region search results as a percentage value, due to being outbid by another advertiser.'
  },
  {
    field: 'meet_share2',
    headerName: 'Meet',
    type: 'float',
    hide: false,
    wrapper: '%',
    isHiddenTotal: false,
    headerTooltip:
      "Meet indicates how many times your rate was the cheapest rate but in parity with one or more competitors' rates, for the total number of impressions the hotel received."
  },
  {
    field: 'beat_share2',
    headerName: 'Beat',
    type: 'float',
    hide: false,
    wrapper: '%',
    isHiddenTotal: false,
    headerTooltip:
      'Beat indicates how many times your rate was the unique cheapest rate compared to competitorsâ rates, for the total number of impressions the hotel received.'
  },
  {
    field: 'lose_share2',
    headerName: 'Lose',
    type: 'float',
    hide: false,
    wrapper: '%',
    isHiddenTotal: false,
    headerTooltip:
      'Lose indicates how many times your rate was more expensive/not the cheapest rate compared to one or more competitorsâ rates, for the total number of impressions the hotel received.'
  },
  {
    field: 'unavailability_share2',
    headerName: 'Unavailability',
    type: 'float',
    hide: false,
    wrapper: '%',
    isHiddenTotal: false,
    headerTooltip:
      'Unavailability indicates how often you either did not send a rate or how often your API did not respond, for the total number of impressions the hotel received.'
  },
  {
    field: 'bookings2',
    headerName: 'Bookings',
    type: 'int',
    hide: false,
    wrapper: '',
    isHiddenTotal: false,
    headerTooltip:
      'Bookings indicates the number of your transactions as tracked by the trivago Tracking Pixel.'
  },
  {
    field: 'booking_conversion2',
    headerName: 'Booking Rate',
    type: 'float',
    hide: false,
    wrapper: '%',
    isHiddenTotal: false,
    headerTooltip:
      'Booking Rate is the percentage of your clicks which led to transactions as tracked by the trivago Tracking Pixel.'
  },
  {
    field: 'cpa2',
    headerName: 'CPA',
    type: 'int',
    hide: false,
    wrapper: '%',
    isHiddenTotal: false,
    headerTooltip:
      'CPA indicates your acquisition cost as a percentage of your total booking volume. It is calculated by Cost/Gross Revenue.'
  },
  {
    field: 'gross_revenue2',
    headerName: 'Gross Revenue',
    type: 'float',
    hide: false,
    wrapper: '€',
    isHiddenTotal: false,
    headerTooltip:
      'Gross Revenue indicates your total booking value as tracked by the trivago Tracking Pixel.'
  },
  {
    field: 'my_potential2',
    headerName: 'Max Potential',
    type: 'int',
    hide: false,
    wrapper: '',
    isHiddenTotal: true,
    headerTooltip:
      'Maximum Potential indicates the maximum traffic that you can achieve for a hotel or a POS by bidding up.'
  },
  {
    field: 'average_booking_volume2',
    headerName: 'ABV',
    type: 'float',
    hide: false,
    wrapper: '€',
    isHiddenTotal: false,
    headerTooltip:
      'Average Booking Value indicates the average room night revenue generated per booking as tracked by the trivago Tracking Pixel.'
  },
  {
    field: 'net_revenue2',
    headerName: 'Net Revenue',
    type: 'int',
    hide: false,
    wrapper: '€',
    isHiddenTotal: false,
    headerTooltip:
      'The Net Revenue indicates the value of total booking commission as tracked by the trivago Tracking Pixel. The calculation is Gross Revenue multiplied by Margin.'
  },
  {
    field: 'net_rev_per_click2',
    headerName: 'Net Revenue per Click',
    type: 'int',
    hide: false,
    wrapper: '€',
    isHiddenTotal: false,
    headerTooltip:
      "The Net Revenue per Click is your net revenue, as tracked by the trivago Tracking Pixel, divided by your clicks.\nWhy it matters: you can determine whether you're breaking even by comparing the Net Rev/Click to your CPC."
  },
  {
    field: 'profit2',
    headerName: 'Profit',
    type: 'float',
    hide: false,
    wrapper: '€',
    isHiddenTotal: false,
    headerTooltip:
      'Profit indicates the value remaining from booking commission after the Total Cost is deducted.\nProfit is calculated by Net Revenue - Total Cost\nNote: Only available if trivago Tracking Pixel has been implemented and if commission data has been supplied.'
  },
  {
    field: 'roas2',
    headerName: 'ROAS',
    type: 'int',
    hide: false,
    wrapper: '%',
    isHiddenTotal: false,
    headerTooltip:
      'Return on Advertising Spend indicates the effectiveness of your rates in relation to your Average CPC.\nROAS is calculated by Net rev / Cost.\nNote: Only available if the trivago Tracking Pixel has been implemented and commission data has been supplied.'
  },
  {
    field: 'margin2',
    headerName: 'Margin',
    type: 'int',
    hide: false,
    wrapper: '%',
    isHiddenTotal: false,
    headerTooltip:
      'The Margin indicates the commission percentage generated from bookings as tracked by the trivago Tracking Pixel.'
  },
  {
    field: 'booking_value_index2',
    headerName: 'Booking Value Index',
    type: 'string',
    hide: false,
    wrapper: '',
    isHiddenTotal: true,
    headerTooltip:
      'Booking Value Index indicates the estimated average booking amount per click for a property on a POS, compared to your Average Booking Amount per click on the respective POS. '
  },
  {
    field: 'overall_liking2',
    headerName: 'Rating',
    type: 'float',
    hide: false,
    wrapper: '',
    isHiddenTotal: true,
    headerTooltip: ''
  },
  {
    field: 'country',
    headerName: 'Country',
    type: 'string',
    hide: false,
    wrapper: '',
    isHiddenTotal: true,
    headerTooltip: 'analytics_tooltip_country'
  },
  {
    field: 'city',
    headerName: 'City',
    type: 'string',
    hide: false,
    wrapper: '',
    isHiddenTotal: true,
    headerTooltip: 'analytics_tooltip_city'
  },
  {
    field: 'stars',
    headerName: 'Stars',
    type: 'int',
    hide: false,
    wrapper: '',
    isHiddenTotal: true,
    headerTooltip: 'analytics_tooltip_stars'
  }
];

export let rows: any = [];
for (let i = 0; i < 1000; i++) {
  const template = {
    id: faker.random.number(600000),
    name2: faker.company.companyName(),
    pid: faker.random.number(60000).toString(),
    pos2: faker.address.countryCode().toUpperCase(),
    hotel_impressions2: faker.random.number(2000),
    clicks2: faker.random.number(2000),
    cost2: faker.random.number(6),
    avg_cpc2: 0.9,
    top_pos_share2: 1,
    impressions_share2: 1,
    outbid_rate2: 0,
    meet_share2: 0,
    beat_share2: 1,
    lose_share2: 0,
    unavailability_share2: 0,
    bookings2: 0,
    booking_conversion2: 0,
    cpa2: '-',
    gross_revenue2: 0,
    my_potential2: 755,
    average_booking_volume2: '-',
    net_revenue2: 0,
    net_rev_per_click2: 0,
    profit2: -78.9,
    roas2: 0,
    margin2: '-',
    booking_value_index2: 'Low',
    overall_liking2: '-',
    country: faker.address.country(),
    city: faker.address.city(),
    stars: 0
  };
  rows.push(template);
}

export const total = {
  hotel_impressions2: 8716447,
  clicks2: 3907,
  cost2: 1862.67,
  avg_cpc2: 0.48,
  top_pos_share2: 0.004,
  impressions_share2: 0.7301,
  outbid_rate2: 0,
  meet_share2: 0.0488,
  beat_share2: 0.0018,
  lose_share2: 0.6795,
  unavailability_share2: 0.2699,
  bookings2: 35,
  booking_conversion2: 0.009,
  cpa2: 0.0909,
  gross_revenue2: 20495,
  average_booking_volume2: 585.57,
  net_revenue2: 0,
  net_rev_per_click2: 0,
  profit2: -1862.67,
  roas2: '-',
  margin2: 0
};
