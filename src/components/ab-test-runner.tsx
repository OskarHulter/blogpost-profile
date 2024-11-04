import { CommentList } from 'src/components/comment-list'
import Control from 'src/components/control'
import Variant from 'src/components/variant'
import { useFeatures } from 'src/features/useFeatures'

export default function AbTestRunner() {
  const { features } = useFeatures();
  const current = features[0];
  const isVariant = current?.name === 'variant' ? true : false;

  if (isVariant) {
    return <Variant><CommentList /></Variant>;
  }
  
  return (
    <Control><CommentList /></Control>
  );
}
