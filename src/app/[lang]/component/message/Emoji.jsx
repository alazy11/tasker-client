'use client';

import DropDownModel from '@/app/[lang]/component/DropDownModel';
// import EmojiPicker from 'emoji-picker-react';

import dynamic from 'next/dynamic';

const Picker = dynamic(
  () => {
    return import('emoji-picker-react');
  },
  { ssr: false }
);



// {
//     activeSkinTone: SkinTones;
//     unified: string;
//     unifiedWithoutSkinTone: string;
//     emoji: string; // the emoji character, for example: '😀'. Emoji ID in custom emojis
//     isCustom: boolean; // whether the emoji is a custom emoji or not
//     names: string[];
//     imageUrl: string; // the url of the emoji image with the current emoji style applied
//     getImageUrl: (emojiStyle: EmojiStyle) => string; // a function that receives an emoji style and returns the url of the emoji image with the provided style applied
//   }



export default function Emoji({setShowEmoji,inputElement,setMessageInput}) {

    return(

        <DropDownModel setShowIcon={setShowEmoji}>
        <div className='h-full m-auto relative' style={{width:'480px', maxWidth:'100%' }}>
        {/* drop-menu-shadow  */}
        {/* <div className="absolute z-2700 shadow-xl border-e8eaed rounded-lg min-w-44 pt-2 pb-2 overflow-y-auto flex flex-col" style={{ top:'36%'}}> */}
        <div className="absolute z-2700 shadow-xl emoji-container rounded-md overflow-hidden" style={{ top:'36%'}}>
            <Picker width={'100%'} height={"100%"} lazyLoadEmojis={true} autoFocusSearch={false} emojiVersion={'0.6'} previewConfig={{showPreview: false}} emojiStyle={'apple'} skinTonesDisabled={true}
            onEmojiClick={(emojiData, e)=>{
                console.log("emoji8",emojiData.emoji);
                inputElement.current.textContent = inputElement.current.textContent + emojiData.emoji;
                setMessageInput(prev=>{
                    return prev + emojiData.emoji;
                })
                setShowEmoji(false);
            }} />
        </div>
        </div>
        </DropDownModel>

    );

}