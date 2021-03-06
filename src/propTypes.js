import PropTypes from 'prop-types'

export default {
  // General
  data: PropTypes.array,
  loading: PropTypes.bool,
  showPagination: PropTypes.bool,
  showPaginationTop: PropTypes.bool,
  showPaginationBottom: PropTypes.bool,
  showPageSizeOptions: PropTypes.bool,
  pageSizeOptions: PropTypes.array,
  defaultPageSize: PropTypes.number,
  showPageJump: PropTypes.bool,
  collapseOnSortingChange: PropTypes.bool,
  collapseOnPageChange: PropTypes.bool,
  collapseOnDataChange: PropTypes.bool,
  freezeWhenExpanded: PropTypes.bool,
  sortable: PropTypes.bool,
  resizable: PropTypes.bool,
  filterable: PropTypes.bool,
  defaultSortDesc: PropTypes.bool,
  defaultSorted: PropTypes.array,
  defaultFiltered: PropTypes.array,
  defaultResized: PropTypes.array,
  defaultExpanded: PropTypes.object,
  defaultFilterMethod: PropTypes.func,
  defaultSortMethod: PropTypes.func,

  // Controlled State Callbacks
  onPageChange: PropTypes.func,
  onPageSizeChange: PropTypes.func,
  onSortedChange: PropTypes.func,
  onFilteredChange: PropTypes.func,
  onResizedChange: PropTypes.func,
  onExpandedChange: PropTypes.func,

  // Pivoting
  pivotBy: PropTypes.array,

  // Key Constants
  pivotValKey: PropTypes.string,
  pivotIDKey: PropTypes.string,
  subRowsKey: PropTypes.string,
  aggregatedKey: PropTypes.string,
  nestingLevelKey: PropTypes.string,
  originalKey: PropTypes.string,
  indexKey: PropTypes.string,
  groupedByPivotKey: PropTypes.string,

  // Server-side Callbacks
  onFetchData: PropTypes.func,

  // Classes
  className: PropTypes.string,
  style: PropTypes.object,

  // Component decorators
  getProps: PropTypes.object,
  getTableProps: PropTypes.object,
  getTheadGroupProps: PropTypes.object,
  getTheadGroupTrProps: PropTypes.object,
  getTheadGroupThProps: PropTypes.object,
  getTheadProps: PropTypes.object,
  getTheadTrProps: PropTypes.object,
  getTheadThProps: PropTypes.object,
  getTheadFilterProps: PropTypes.object,
  getTheadFilterTrProps: PropTypes.object,
  getTheadFilterThProps: PropTypes.object,
  getTbodyProps: PropTypes.object,
  getTrGroupProps: PropTypes.object,
  getTrProps: PropTypes.object,
  getTdProps: PropTypes.object,
  getTfootProps: PropTypes.object,
  getTfootTrProps: PropTypes.object,
  getTfootTdProps: PropTypes.object,
  getPaginationProps: PropTypes.object,
  getLoadingProps: PropTypes.object,
  getNoDataProps: PropTypes.object,
  getResizerProps: PropTypes.object,

  // Global Column Defaults
  columns: PropTypes.shape({
    // Renderers
    Cell: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.string,
      PropTypes.func,
    ]),
    Header: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.string,
      PropTypes.func,
    ]),
    Footer: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.string,
      PropTypes.func,
    ]),
    Aggregated: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.string,
      PropTypes.func,
    ]),
    Pivot: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.string,
      PropTypes.func,
    ]),
    PivotValue: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.string,
      PropTypes.func,
    ]),
    Expander: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.string,
      PropTypes.func,
    ]),
    Filter: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.func,
    ]),

    // All Columns
    sortable: PropTypes.bool, // use table default
    resizable: PropTypes.bool, // use table default
    filterable: PropTypes.bool, // use table default
    show: PropTypes.bool,
    minWidth: PropTypes.number,

    // Cells only
    className: PropTypes.string,
    style: PropTypes.object,
    getProps: PropTypes.object,

    // Pivot only
    aggregate: PropTypes.func,

    // Headers only
    headerClassName: PropTypes.string,
    headerStyle: PropTypes.object,
    getHeaderProps: PropTypes.object,

    // Footers only
    footerClassName: PropTypes.string,
    footerStyle: PropTypes.object,
    getFooterProps: PropTypes.object,
    filterMethod: PropTypes.func,
    filterAll: PropTypes.bool,
    sortMethod: PropTypes.func,
  }),

  // Global Expander Column Defaults
  expanderDefaults: PropTypes.shape({
    sortable: PropTypes.bool,
    resizable: PropTypes.bool,
    filterable: PropTypes.bool,
    width: PropTypes.number,
  }),

  pivotDefaults: PropTypes.object,

  // Text
  previousText: PropTypes.string,
  nextText: PropTypes.string,
  loadingText: PropTypes.string,
  noDataText: PropTypes.string,
  pageText: PropTypes.string,
  ofText: PropTypes.string,
  rowsText: PropTypes.string,

  // Components
  TableComponent: PropTypes.element,
  TheadComponent: PropTypes.element,
  TbodyComponent: PropTypes.element,
  TrGroupComponent: PropTypes.element,
  TrComponent: PropTypes.element,
  ThComponent: PropTypes.element,
  TdComponent: PropTypes.element,
  TfootComponent: PropTypes.element,
  FilterComponent: PropTypes.element,
  ExpanderComponent: PropTypes.element,
  PivotValueComponent: PropTypes.element,
  AggregatedComponent: PropTypes.element,
  PivotComponent: PropTypes.element, // this is a computed default generated using
  // the ExpanderComponent and PivotValueComponent at run-time in methods.js
  PaginationComponent: PropTypes.element,
  PreviousComponent: PropTypes.element,
  NextComponent: PropTypes.element,
  LoadingComponent: PropTypes.element,
  NoDataComponent: PropTypes.element,
  ResizerComponent: PropTypes.element,
  PadRowComponent: PropTypes.element,
}
