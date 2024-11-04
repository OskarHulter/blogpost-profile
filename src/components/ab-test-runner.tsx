import { CommentList } from 'src/components/comment-list'
import Control from 'src/components/control'
import Variant from 'src/components/variant'
import { useFeatures } from 'src/features/useFeatures'
import type { Comments } from 'src/server/schema'

export default function AbTestRunner({ comments }: { comments: Comments }) {
  const { features } = useFeatures();
  const current = features[0];
  const isVariant = current?.name === 'variant' ? true : false;

  if (isVariant) {
    return <Variant><CommentList comments={comments} /></Variant>;
  }
  
  return (
    <Control><CommentList comments={comments} /></Control>
  );
}
