import os, glob, json
from tqdm import tqdm


keyword_video = {}

genre_videos_list = os.listdir('/x/dandans/hand_video_dataset_v2')
print(genre_videos_list)

for genre_videos in genre_videos_list:
    genre = genre_videos.split('_')[0]
    vid_list = []
    #
    vid_list = glob.glob(f'/x/dandans/hand_video_dataset_v2/{genre_videos}/*/*.mp4')
    
    for index, item in enumerate(vid_list):
        item = item.split('/')[-1]
        vid_list[index] = item
    vid_list.sort(key=lambda x:int( x.split("_", 2)[1] ))
    print(vid_list[:10])
    
    
    for index, item in enumerate(vid_list):
        item = item.split("_", 2)[-1][:-4]
        vid_list[index] = item
    keyword_video[genre] = vid_list
with open('keyward_video.json', 'w') as fout:
    json.dump(keyword_video, fout, indent=4)

for k, v in keyword_video.items():
    print(k, len(v))