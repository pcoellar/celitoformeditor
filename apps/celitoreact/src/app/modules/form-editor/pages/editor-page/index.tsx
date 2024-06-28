import PageLayoutTitle from "../../components/page-layout-title";
import Editor from "../../features/editor";
import EditorContextProvider from "../../store/editor-context-provider";
import * as S from './styles';

export default function EditorPage() {
    return (
        <EditorContextProvider>
            <S.RootContainer>
                <PageLayoutTitle />
                <Editor />
            </S.RootContainer>
        </EditorContextProvider>
    );
}
