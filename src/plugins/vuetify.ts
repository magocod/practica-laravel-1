import Vue from 'vue';
import Vuetify from 'vuetify';

// importar componentes
import VApp from 'vuetify/es5/components/VApp';
import VAvatar from 'vuetify/es5/components/VAvatar';
import VExpansionPanel from 'vuetify/es5/components/VExpansionPanel';
import VDataTable from 'vuetify/es5/components/VDataTable';
import VSwitch from 'vuetify/es5/components/VSwitch';
import VSelect from 'vuetify/es5/components/VSelect';
import VTabs from 'vuetify/es5/components/VTabs';
import VMenu from 'vuetify/es5/components/VMenu';
import VDatePicker from 'vuetify/es5/components/VDatePicker';
import VAutocomplete from 'vuetify/es5/components/VAutocomplete';
import VDialog from 'vuetify/es5/components/VDialog';
import VDivider from 'vuetify/es5/components/VDivider';
import VDataIterator from 'vuetify/es5/components/VDataIterator';
import VChip from 'vuetify/es5/components/VChip';
import VTooltip from 'vuetify/es5/components/VTooltip';
import VSubheader from 'vuetify/es5/components/VSubheader';
import VCard from 'vuetify/es5/components/VCard';
import VForm from 'vuetify/es5/components/VForm';
import VTextField from 'vuetify/es5/components/VTextField';
import VAlert from 'vuetify/es5/components/VAlert';
import VNavigationDrawer from 'vuetify/es5/components/VNavigationDrawer';
import VFooter from 'vuetify/es5/components/VFooter';
import VList from 'vuetify/es5/components/VList';
import VBtn from 'vuetify/es5/components/VBtn';
import VIcon from 'vuetify/es5/components/VIcon';
import VGrid from 'vuetify/es5/components/VGrid';
import VToolbar from 'vuetify/es5/components/VToolbar';
import transitions from 'vuetify/es5/components/transitions';

// importar estilos
import 'vuetify/src/stylus/app.styl';

Vue.use(Vuetify, {
  components: {
    VApp,
    VAvatar,
    VExpansionPanel,
    VDataTable,
    VSwitch,
    VSelect,
    VTabs,
    VMenu,
    VDatePicker,
    VAutocomplete,
    VDialog,
    VDivider,
    VDataIterator,
    VChip,
    VTooltip,
    VSubheader,
    VCard,
    VForm,
    VTextField,
    VAlert,
    VNavigationDrawer,
    VFooter,
    VList,
    VBtn,
    VIcon,
    VGrid,
    VToolbar,
    transitions,
  },
  theme: {
    primary: '#1A237E',
    secondary: '#B71C1C',
    accent: '#82B1FF',
    error: '#FF5252',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FFC107',
  },
  iconfont: 'md',
});
