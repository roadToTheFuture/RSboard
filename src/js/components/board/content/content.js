import { CreateFieldColumn  } from '@js/components/board/classes/CreateFieldColumn.js';
import { textPlaceholder } from '@js/constants/constants.js';
import './content.scss';

const NewFieldAddColumn = new CreateFieldColumn (textPlaceholder);
NewFieldAddColumn.render();

