import { InformationLayout } from './information-layout';
import { getInfoTitle } from '../../utils';

export function Information() {
	return <InformationLayout>{getInfoTitle()}</InformationLayout>;
}
